import {messagesApi} from '../../utils/api'


const actions = {
  setMessages: items => ({
    type: 'MESSAGES:SET_ITEMS',
    payload: items
  }),
  deleteMessage: id => ({
    type: 'MESSAGES:REMOVE',
    payload: id
  }),
  addMessage: message => ({
    type: 'MESSAGES:ADD_MESSAGE',
    payload: message
  }),
  removeMessageById: (id) => async dispatch => {
    try {
      await messagesApi.removeById(id)
    } catch (e) {}
  },
  fetchSendMessage: ({dialogId, text, attachments}) => async dispatch => {
    const data = {dialogId}
    if (text) data.text = text
    if (attachments) data.attachments = attachments
    await messagesApi.send(data)
  },
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
      dispatch({type: 'MESSAGES:ERROR'})
    }
  }
}
export default actions