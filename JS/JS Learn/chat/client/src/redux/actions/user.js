import {userApi} from '../../utils/api'


const actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data
  }),
  setLoading: (loading) => ({
    type: 'USER:SET_LOADING',
    payload: loading
  }),
  setError: () => ({
    type: 'USER:LOGIN_FAIL'
  }),
  setIsAuth: (isAuth) => ({
    type: 'USER:SET_IS_AUTH',
    payload: isAuth
  }),
  logout: () => ({
    type: 'USER:LOGOUT'
  }),
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({data}) => {
      dispatch(actions.setUserData(data))
    }).catch(() => {
      dispatch(actions.setError())
    })
  },
  fetchUserLogin: postData => dispatch => {
    return userApi.login(postData)
      .then(({data}) => {
        window.axios.defaults.headers.common['token'] = data.token
        window.localStorage['token'] = data.token
        dispatch(actions.setIsAuth(true))
      })
  },
  fetchUserRegister: postData => dispatch => {
    return userApi.register(postData)
  }
}

export default actions