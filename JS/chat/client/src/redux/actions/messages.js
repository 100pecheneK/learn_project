import {messagesApi} from '../../utils/api'


const actions = {
  setMessages: items => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: items
  }),
  setLoading: loading => ({
    type: 'MESSAGES:SET_LOADING',
    payload: loading
  }),
  fetchMessages: dialogId => async dispatch => {
    try {
      dispatch(actions.setLoading(true))
      const res = await messagesApi.getAllByDialogId(dialogId)
      dispatch(actions.setMessages(res.data))
    } catch (e) {
      dispatch(actions.setLoading(false))
    }
  }
}
export default actions