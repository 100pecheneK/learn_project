const initialState = {
  items: [],
  currentDialogId: null,
  loading: true
}
export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'DIALOGS:SET_ITEMS':
      return {
        ...state,
        items: payload.map(item => ({
          ...item,
          created_at: new Date(item.created_at)
        })),
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
        error: true,
        loading: false
      }
    default:
      return state
  }
}