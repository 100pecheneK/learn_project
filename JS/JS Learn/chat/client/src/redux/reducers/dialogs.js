const initialState = {
  items: null,
  currentDialogId: window.location.pathname.split('dialog/')[1],
  loading: true
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'DIALOGS:CHANGE_LAST_MESSAGE':
      const newItems = [...state.items.filter(dialog => dialog._id !== payload._id), payload]
      return {
        ...state,
        items: newItems
      }
    case 'DIALOGS:SET_ITEMS':
      return {
        ...state,
        items: payload,
        loading: false
      }
    case 'DIALOGS:SET_CURRENT_DIALOG_ID':
      return {
        ...state,
        currentDialogId: payload
      }
    case 'DIALOGS:ERROR':
      return {
        ...state,
        items: [],
        error: true,
        loading: false
      }
    default:
      return state
  }
}