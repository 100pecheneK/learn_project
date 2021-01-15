import auth from '../core/Auth/Auth'

export default auth.init({
  pathUri: '/',
  redirectUri: '/',
  postLogoutRedirectUri: '/',
  cookieSecret: 'cookie',
  cookieLifeTime: '36000',
  tokenLifetime: '10h',
})
