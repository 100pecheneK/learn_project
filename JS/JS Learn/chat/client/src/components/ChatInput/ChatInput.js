import React, {useEffect, useState} from 'react'
import {UploadField} from '@navjobs/upload'
import {Picker} from 'emoji-mart'
import './ChatInput.scss'
import {Button, Input, Spin} from 'antd'
import {AudioOutlined, CameraOutlined, SendOutlined, SmileOutlined} from '@ant-design/icons'


const ChatInput = ({onSendMessage, setFileList, fileList, isUploadingFiles}) => {
  const [value, setValue] = useState('')
  const [showEmojiPickerVisible, setShowEmojiPickerVisible] = useState(false)


  const toggleEmojiPicker = () => {
    setShowEmojiPickerVisible(prev => !prev)
  }
  const closeEmojiPicker = () => {
    setShowEmojiPickerVisible(false)
  }
  const sendMessage = () => {
    if (!isUploadingFiles && (value.trim() || fileList)) {
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
    <>
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
        <Input
          autosize={{minRows: 1, maxRows: 6}}
          onKeyPress={onEnterPress}
          onChange={e => setValue(e.target.value)}
          placeholder={'Введите текст сообщения...'}
          value={value}
        />
        <div className="chat-input__actions">
          <UploadField
            onFiles={setFileList}
            containerProps={{
              className: 'chat-input__actions-upload-btn'
            }}
            uploadProps={{
              accept: '.jpg,.jpeg,.png,.gif,.bmp',
              multiple: 'multiple'
            }}
          >
            <Button style={{opacity: fileList !== 0 ? '1' : ''}} type="link" shape="circle"
                    icon={<CameraOutlined/>}/>
            {fileList !== 0 && <span style={{
              position: 'absolute',
              top: '0',
              left: '12px',
            }}>{fileList}</span>}
          </UploadField>

          {isUploadingFiles ? <Spin/> : value.trim() || fileList ?
            <Button onClick={sendMessage} type="link" shape="circle"
                    icon={<SendOutlined/>}/> :
            <Button type="link" shape="circle" icon={<AudioOutlined/>}/>
          }

        </div>
      </div>
    </>
  )

}

export default ChatInput
