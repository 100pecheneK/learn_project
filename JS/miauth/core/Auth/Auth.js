const bcrypt = require('bcrypt')
const cookie = require('cookie')
const jsonwebtoken = require('jsonwebtoken')

class Auth {
  constructor() {
    if (!Auth.instance) {
      Auth.instance = this
    }
    return Auth.instance
  }

  init(options) {
    if (this.isInitialized) return

    this.pathUri = options.pathUri
    this.redirectUri = options.redirectUri
    this.postLogoutRedirectUri = options.postLogoutRedirectUri
    this.cookieSecret = options.cookieSecret
    this.cookieLifeTime = options.cookieLifeTime
    this.tokenLifetime = options.tokenLifetime

    this.isInitialized = true
    return this
  }

  async handleRegister(req, res, userRegisterFields, database, options) {
    const fields = {}
    userRegisterFields.forEach(field => (fields[field] = req.body[field]))
    try {
      fields.password = await bcrypt.hash(fields.password, 10)
      const existingUser = await database.findOne({
        ...options,
        field: { field: 'email', value: fields.email },
      })
      if (existingUser) {
        throw new Error('User with same email already exists')
      }

      const newUser = await database.createOne({ ...options, fields })

      return res.json(newUser)
    } catch (e) {
      throw e
    }
  }

  async handleLogin(req, res, database, options) {
    const { email, password } = req.body
    try {
      const existingUser = await database.findOne({
        ...options,
        field: { field: 'email', value: email },
      })
      if (!existingUser) {
        throw new Error('Bad email or password')
      }
      const compared = await bcrypt.compare(password, existingUser.password)
      if (!compared) {
        throw new Error('Bad email or password')
      }
      const token = jsonwebtoken.sign(
        { userId: existingUser.id },
        this.cookieSecret,
        { expiresIn: this.tokenLifetime }
      )
      existingUser.tokens = [...existingUser.tokens, token]
      await existingUser.save()

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: this.cookieLifeTime,
          path: this.pathUri,
        })
      )
      res.json({ token })
    } catch (e) {
      throw e
    }
  }

  authRequired(handler) {
    return async (req, res) => {
      try {
        const verifyed = jsonwebtoken.verify(
          req.cookies.auth,
          this.cookieSecret
        )
        req.userId = verifyed.userId
        return handler(req, res)
      } catch (e) {
        res.status(401).json({ error: e.message })
      }
    }
  }

  async handleLogout(req, res, database, options) {
    try {
      const authToken = req.cookies.auth
      const verifyed = jsonwebtoken.verify(authToken, this.cookieSecret)
      const user = await database.findById({ ...options, id: verifyed.userId })
      user.tokens = user.tokens.filter(token => token !== authToken)
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('auth', '', {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: this.cookieLifeTime,
          path: this.pathUri,
        })
      )

      res.writeHead(302, {
        Location: this.postLogoutRedirectUri,
      })
      res.end()
      // res.json({ hello: 'hello' })
    } catch (e) {
      res.status(500).json({ error: e })
    }
  }
  async getSession(req) {
    try {
      const authToken = cookie.parse(req.headers.cookie).auth
      if (!authToken) {
        throw new Error('no auth token')
      }
      const verifyed = jsonwebtoken.verify(authToken, this.cookieSecret)
      return verifyed
    } catch (e) {
      throw e
    }
  }
}

const auth = new Auth()
module.exports = auth
