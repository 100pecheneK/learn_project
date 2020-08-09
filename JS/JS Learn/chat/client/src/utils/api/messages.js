import {axios} from '../../core'


export default {
  getAllByDialogId: dialogId => axios.get(`/messages/${dialogId}`),
  send: (text, dialogId) => axios.post('/messages', {text, dialogId}),
  removeById: id => axios.delete('/messages/delete/' + id)
}