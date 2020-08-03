import {notification} from 'antd'


export default ({title, text, type = 'info'}) => {
  notification[type]({
    message: title,
    description: text
  })
}