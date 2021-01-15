const auth = require('./Auth')
const bcrypt = require('bcrypt')

const database = {
  data: [],
  create: async function (fields) {
    function omit(key, obj) {
      const { [key]: omitted, ...rest } = obj
      return rest
    }
    const dataField = {
      id: this.data.length,
      ...fields,
    }
    this.data.push(dataField)
    return omit('password', this.data[this.data.length - 1])
  },
  findOne: async function (field) {
    const key = Object.keys(field)[0]
    const res = this.data.find(data => data[key] === field[key])
    return res
  },
}
const res = {
  json: obj => JSON.stringify(obj),
}

describe('Auth', () => {
  test('should initialize once', () => {
    const pathUri = 'pathUri'
    const redirectUri = 'redirectUri'
    const postLogoutRedirectUri = 'postLogoutRedirectUri'
    const cookieSecret = 'cookieSecret'
    const tokenLifetime = 'tokenLifetime'
    auth.init({
      pathUri,
      redirectUri,
      postLogoutRedirectUri,
      cookieSecret,
      tokenLifetime,
    })
    const pathUri_2 = 'pathUri_2'
    const redirectUri_2 = 'redirectUri_2'
    const postLogoutRedirectUri_2 = 'postLogoutRedirectUri_2'
    const cookieSecret_2 = 'cookieSecret_2'
    const tokenLifetime_2 = 'tokenLifetime_2'
    auth.init({
      pathUri_2,
      redirectUri_2,
      postLogoutRedirectUri_2,
      cookieSecret_2,
      tokenLifetime_2,
    })
    expect(auth.pathUri).toBe('pathUri')
    expect(auth.redirectUri).toBe('redirectUri')
    expect(auth.postLogoutRedirectUri).toBe('postLogoutRedirectUri')
    expect(auth.cookieSecret).toBe('cookieSecret')
    expect(auth.cookieLifeTime).toBe('cookieLifeTime')
    expect(auth.tokenLifetime).toBe('tokenLifetime')
  })
  test('should register user with hashed password and save it in database', async () => {
    // prepare mock data
    const req = {
      body: {
        email: 'email@example.com',
        name: 'name',
        password: 'password',
      },
    }

    const userRegisterFields = ['email', 'name', 'password']

    // do logic
    const resData = await auth.handleRegister(
      req,
      res,
      userRegisterFields,
      database
    )

    // test this
    const parsedResData = JSON.parse(resData)
    parsedResData.password = database.data[parsedResData.id].password
    expect(async () => {
      await bcrypt.compare(req.body.password, database.data[0].password)
    }).not.toThrow()
    expect(parsedResData.email).toBe(req.body.email)
    expect(parsedResData.name).toBe(req.body.name)
    expect(parsedResData).toEqual(database.data[0])
  })
  test('should throw error if user rigistered with same email', async () => {
    const req_1 = {
      body: {
        email: 'email2@example.com',
        name: 'name',
        password: 'password',
      },
    }
    const userRegisterFields = ['email', 'name', 'password']

    await auth.handleRegister(req_1, res, userRegisterFields, database)
    expect(async () => {
      await auth.handleRegister(req_1, res, userRegisterFields, database)
    }).rejects.toThrow(new Error('User with same email already exists'))
  })
})
