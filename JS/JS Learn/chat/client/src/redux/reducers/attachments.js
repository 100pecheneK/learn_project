const initialState = {
  data: null,
  isAuth: !!localStorage.getItem('token'),
  loading: true
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER:SET_IS_AUTH':
      return {
        ...state,
        isAuth: payload
      }
    case 'USER:SET_DATA':
      return {
        ...state,
        data: payload,
        isAuth: true,
        loading: false
      }
    case 'USER:LOGIN_FAIL':
    case 'USER:LOGOUT':
      localStorage.removeItem('token')
      return {
        ...initialState,
        isAuth: false
      }
    default:
      return state
  }
}