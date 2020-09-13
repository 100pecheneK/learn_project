const initialState = {
  items: [],
  loading: false
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'MESSAGES:SET_LOADING':
      return {
        ...state,
        loading: payload
      }
    case 'MESSAGES:SET_ITEMS':
      return {
        ...state,
        items: payload,
        loading: false
      }
    default:
      return state
  }
}