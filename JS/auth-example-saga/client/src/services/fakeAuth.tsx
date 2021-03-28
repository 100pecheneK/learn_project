import config from '@/config/config'
import { ChangePasswordType } from '@/redux/auth/@types'
import { tokens } from '@utils/tokens'

function withDoubleAuthCheck<A, F extends { ok?: any }>(
  fn: (...args: A[]) => Promise<F>
) {
  return async (...args: A[]): Promise<F> => {
    const res = await fn(...args)
    if (res.ok) {
      return res
    } else {
      const refreshed = await fakeAuth.refreshAccessToken()
      if (refreshed.ok) {
        const rr = await refreshed.json()
        tokens.setAccessToken(rr.accessToken)

        const newRes = await fn(...args)
        if (newRes.ok) {
          return newRes
        } else {
          return newRes
        }
      } else {
        tokens.resetTokensInLocalStorage()
        throw new Error('Bad refresh token')
      }
    }
  }
}

const fakeAuth = {
  getUser: withDoubleAuthCheck(async () => {
    const accessToken = tokens.getAccessToken()
    const res = await fetch(config.API_URL + '/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return await res.json()
  }),
  async refreshAccessToken() {
    const refreshToken = tokens.getRefreshToken()
    const r = await fetch('http://localhost:4000/api/auth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: refreshToken }),
    })
    return r
  },
  async login(data: { username: string; password: string }) {
    const res = await fetch(config.API_URL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      throw new Error('Invalid login data')
    }
    const { accessToken, refreshToken } = await res.json()
    tokens.setAccessToken(accessToken)
    tokens.setRefreshToken(refreshToken)
  },
  async register(data: { username: string; phone: string; password: string }) {
    const res = await fetch(config.API_URL + '/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      throw new Error('Invalid register data')
    }
  },
  async logout() {
    await fetch(config.API_URL + '/auth/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: tokens.getRefreshToken() }),
    })
    tokens.resetTokensInLocalStorage()
  },
  changePassword: withDoubleAuthCheck(
    async (data: ChangePasswordType): Promise<{ ok?: any; error?: string }> => {
      const accessToken = tokens.getAccessToken()
      const r = await fetch(config.API_URL + '/auth/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      })
      const res = await r.json()
      if (r.ok) {
        return { ok: res }
      } else {
        return { error: res.message }
      }
    }
  ),
}
export default fakeAuth
