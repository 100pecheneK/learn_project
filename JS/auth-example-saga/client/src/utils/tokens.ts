const ACCESS_TOKEN = 'accessToken'
const REFRESH_TOKEN = 'refreshToken'

export class NoAccessTokenError extends Error {
  msg: string
  constructor() {
    super()
    this.msg = 'No access token'
  }
}
export class NoRefreshTokenError extends Error {
  msg: string
  constructor() {
    super()
    this.msg = 'No refresh token'
  }
}

export const tokens = {
  resetTokensInLocalStorage() {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
  },

  getRefreshToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN)
    if (!refreshToken) throw new NoRefreshTokenError()
    return JSON.parse(refreshToken)
  },

  getAccessToken() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    if (!accessToken) throw new NoAccessTokenError()
    return JSON.parse(accessToken)
  },
  setRefreshToken(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN, JSON.stringify(refreshToken))
  },

  setAccessToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken))
  },
}
