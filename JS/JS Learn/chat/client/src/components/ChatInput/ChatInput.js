import React, {useState} from 'react'
import './ChatInput.scss'
import {Input, Button} from 'antd'
import {SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined} from '@ant-design/icons'

const ChatInput = ({user}) => {
  const [value, setValue] = useState('')

  return (
    <div className={'chat-input'}>
      <div className="chat-input__smile-btn">
        <Button type="link" shape="circle" icon={<SmileOutlined/>}/>
      </div>
      <Input onChange={e => setValue(e.target.value)} placeholder={'Введите текст сообщения...'}/>
      <div className="chat-input__actions">
        <Button type="link" shape="circle" icon={<CameraOutlined/>}/>
        {!value.trim() ?
          <Button type="link" shape="circle" icon={<AudioOutlined/>}/> :
          <Button type="link" shape="circle" icon={<SendOutlined/>}/>}

      </div>
    </div>
  )

}

export default ChatInput
