import React, {useState} from 'react'
import {UploadField} from '@navjobs/upload'
import {Picker} from 'emoji-mart'
import './ChatInput.scss'
import {Button, Input} from 'antd'
import {AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined} from '@ant-design/icons'


const ChatInput = ({onSendMessage}) => {
  const [value, setValue] = useState('')
  const [showEmojiPickerVisible, setShowEmojiPickerVisible] = useState(false)

  const toggleEmojiPicker = () => {
    setShowEmojiPickerVisible(prev => !prev)
  }
  const sendMessage = () => {
    if (value) {
      onSendMessage(value)
      setValue('')
    }
  }
  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <div className={'chat-input'}>
      <div className="chat-input__smile-btn">
        {showEmojiPickerVisible && <div className="chat-input__emoji-picker">
          <Picker set='apple'/>
        </div>}
        <Button onClick={toggleEmojiPicker}
                type="link" shape="circle" icon={<SmileOutlined/>}/>
      </div>
      <Input
        onKeyPress={onEnterPress}
        onChange={e => setValue(e.target.value)}
        placeholder={'Введите текст сообщения...'}
        value={value}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'chat-input__actions-upload-btn'
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.gif,.bmp',
            multiple: 'multiple'
          }}
        >
          <Button type="link" shape="circle" icon={<CameraOutlined/>}/>
        </UploadField>

        {!value.trim() ?
          <Button type="link" shape="circle" icon={<AudioOutlined/>}/> :
          <Button onClick={sendMessage} type="link" shape="circle"
                  icon={<SendOutlined/>}/>}

      </div>
    </div>
  )

}

export default ChatInput
