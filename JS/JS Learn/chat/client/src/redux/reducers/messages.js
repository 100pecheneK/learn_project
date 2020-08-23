const initialState = {
  items: [],
  loading: false,
  error: null
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
    case 'MESSAGES:ERROR':
      return {
        ...state,
        error: true
      }
    case 'MESSAGES:REMOVE':
      return {
        ...state,
        items: state.items.filter(message => message._id !== payload)
      }
    case 'MESSAGES:ADD_MESSAGE':
      return {
        ...state,
        items: [...state.items, payload]
      }
    default:
      return state
  }
}