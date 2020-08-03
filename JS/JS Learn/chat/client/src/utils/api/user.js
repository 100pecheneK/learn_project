import {axios} from '../../core'


export default {
  login: postData => axios.post('/user/login', postData),
  register: postData => axios.post('/user/registration', postData),
  verify: hash => axios.post('/user/verify', {hash}),
  getMe: () => axios.get('/user/me')
}