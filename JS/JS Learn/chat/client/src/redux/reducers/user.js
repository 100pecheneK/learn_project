const initialState = {
  data: null,
  isAuth: !!window.localStorage.token,
  loading: true
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: payload,
        isAuth: true,
        loading: false
      }
    case 'USER:LOGOUT':
      localStorage.removeItem('token')
      return {
        ...initialState,
        isAuth: false,
      }
    default:
      return state
  }
}