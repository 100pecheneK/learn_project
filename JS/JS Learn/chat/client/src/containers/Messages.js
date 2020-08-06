import React, {useCallback, useEffect} from 'react'
import {Messages as BaseMessages} from '../components'
import {messagesActions} from '../redux/actions'
import {connect} from 'react-redux'
import {Empty} from 'antd'
import socket from '../core/socket'


const Messages = ({items, user, loading, fetchMessages, addMessage, currentDialogId}) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }
  }, [currentDialogId, fetchMessages, addMessage])

  const onNewMessage = useCallback(
    (data) => {
      if (data.dialog._id === currentDialogId) {
        addMessage(data)
      }
    }, [currentDialogId, addMessage])

  useEffect(() => {
    socket.on('SERVER:NEW_MESSAGE', onNewMessage)
    return () => {
      socket.off('SERVER:NEW_MESSAGE')
    }
  }, [addMessage, currentDialogId, onNewMessage])

  return currentDialogId ? <BaseMessages user={user} loading={loading} items={items}/> :
    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={'Выбрите диалог'}/>
}

export default connect(
  ({messages, dialogs, user}) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    loading: messages.loading,
    user: user.data
  }),
  messagesActions
)(Messages)
