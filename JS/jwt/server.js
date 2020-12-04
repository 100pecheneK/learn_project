require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')

const app = express()
app.use(express.json())

// !START BATABASE ZONE
let users = [
  {
    username: 'Misha',
    accessToken: '',
    refreshToken: '',
  },
  {
    username: 'Jenya',
    accessToken: '',
    refreshToken: '',
  },
]
// !END BATABASE ZONE

app.get('/me', authRequired, (req, res) => {
  res.json(users.filter(user => user.username === req.user.name))
})

// Authenticate User
app.post('/login', (req, res) => {
  const { username } = req.body

  // database request
  const existingUser = users.find(user => user.username === username)
  // bad credentials (cos user not found)
  if (!existingUser) return res.sendStatus(400)

  const user = { name: username }
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  // database request
  users = users.map(user_db => {
    if (user_db.username === username) {
      user_db.accessToken = accessToken
      user_db.refreshToken = refreshToken
    }
    return user_db
  })

  res.json({ accessToken, refreshToken })
})

// Delete refreshToken fron database
app.delete('/logout', (req, res) => {
  const refreshToken = req.body.token
  // no token
  if (refreshToken === null) return res.sendStatus(401)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    // invalid token
    if (err) return res.sendStatus(403)

    // database request
    users = users.map(user_db => {
      if (user_db.username === user.name) {
        user_db.accessToken = ''
        user_db.refreshToken = ''
      }
      return user_db
    })

    res.sendStatus(204)
  })
})

// Refresh accessToken by given refreshToken
app.post('/token', (req, res) => {
  console.log(users)
  const refreshToken = req.body.token
  // no token
  if (refreshToken === null) return res.sendStatus(401)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    // invalid token
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })

    // database request
    const existingUser = users.find(user => user.refreshToken === refreshToken)

    // invalid token
    if (!existingUser) return res.sendStatus(403)

    // database request
    users = users.map(user_db => {
      if (user_db.username === user.name) {
        user_db.accessToken = accessToken
      }
      return user_db
    })

    res.json({ accessToken })
  })
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
}

function authRequired(req, res, next) {
  const authHeader = req.headers['authorization']
  const accessToken = authHeader && authHeader.split(' ')[1]
  if (accessToken === null) return res.sendStatus(401)
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)

    // database request
    const existingUser = users.find(user_db => user_db.username === user.name)
    // user not found
    if (!existingUser) return res.sendStatus(404)
    // invalid token
    if (existingUser.accessToken !== accessToken) return res.sendStatus(403)
    req.user = user
    next()
  })
}
app.listen(3000)
