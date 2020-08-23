import {axios} from '../../core'


export default {
  getAllByDialogId: dialogId => axios.get(`/messages/${dialogId}`),
  send: (data) => axios.post('/messages', data),
  removeById: id => axios.delete('/messages/delete/' + id)
}