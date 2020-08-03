import {userApi} from '../../utils/api'


const actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data
  }),
  setError: () => ({
    type: 'USER:LOGIN_FAIL'
  }),
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({data}) => {
      dispatch(actions.setUserData(data))
    })
  },
  fetchUserLogin: postData => dispatch => {
    return userApi.login(postData)
      .then(({data}) => {
        window.axios.defaults.headers.common['token'] = data.token
        window.localStorage['token'] = data.token
        dispatch(actions.fetchUserData())
      })
  },
  fetchUserRegister: postData => dispatch => {
    return userApi.register(postData)
  }
}

export default actions