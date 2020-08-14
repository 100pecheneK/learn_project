import React, {useState} from 'react'
import {UploadField} from '@navjobs/upload'
import {Picker} from 'emoji-mart'
import './ChatInput.scss'
import {Button, Input} from 'antd'
import {AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined} from '@ant-design/icons'


const {TextArea} = Input

const ChatInput = ({onSendMessage}) => {
  const [value, setValue] = useState('')
  const [showEmojiPickerVisible, setShowEmojiPickerVisible] = useState(false)

  const toggleEmojiPicker = () => {
    setShowEmojiPickerVisible(prev => !prev)
  }
  const closeEmojiPicker = () => {
    setShowEmojiPickerVisible(false)
  }
  const sendMessage = () => {
    if (value) {
      if (showEmojiPickerVisible) {
        closeEmojiPicker()
      }
      onSendMessage(value)
      setValue('')
    }
  }
  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }
  const onEmojiSelect = ({native}) => {
    setValue(prev => prev + native)
  }
  return (
    <div className={'chat-input'}>
      <div className="chat-input__smile-btn">
        {showEmojiPickerVisible && <div className="chat-input__emoji-picker">
          <div className={'close-emoji-picker'} onClick={closeEmojiPicker}
               style={{position: 'fixed', width: ' 100%', height: '100%', top: 0, left: 0}}/>
          <Picker onSelect={onEmojiSelect}/>
        </div>}
        <Button onClick={toggleEmojiPicker}
                type="link" shape="circle" icon={<SmileOutlined/>}/>
      </div>
      <TextArea
        autosize={{minRows: 1, maxRows: 6}}
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
