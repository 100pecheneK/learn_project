import React from 'react'
import {ChatInput as BaseChatInput} from '../components'
import {connect} from 'react-redux'
import {messagesActions} from '../redux/actions'


const ChatInput = ({fetchSendMessage, currentDialogId}) => {
  const onSendMessage = (text) => {
    fetchSendMessage(text, currentDialogId)
  }

  return (
    <BaseChatInput onSendMessage={onSendMessage}/>
  )
}

export default connect(({dialogs}) => dialogs, messagesActions)(ChatInput)
