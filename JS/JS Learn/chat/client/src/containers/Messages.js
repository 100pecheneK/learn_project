import React, {useCallback, useEffect} from 'react'
import {Messages as BaseMessages} from '../components'
import {messagesActions} from '../redux/actions'
import {connect} from 'react-redux'
import {Empty} from 'antd'
import socket from '../core/socket'
import {useHistory} from 'react-router'


const Messages = ({items, user, loading, error, removeMessageById, fetchMessages, addMessage, deleteMessage, currentDialogId}) => {
  const history = useHistory()

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }
  }, [currentDialogId, fetchMessages, addMessage])

  useEffect(() => {
    if (error) {
      history.push('/')
    }
  }, [error, history])

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

  const onDeleteMessage = useCallback(
    (data) => {
      if (data.dialog === currentDialogId) {
        deleteMessage(data._id)
      }
    }, [deleteMessage, currentDialogId]
  )
  useEffect(() => {
    socket.on('SERVER:DELETE_MESSAGE', onDeleteMessage)
    return () => {
      socket.off('SERVER:DELETE_MESSAGE')
    }
  }, [onDeleteMessage, currentDialogId, onNewMessage])

  return currentDialogId ?
    <BaseMessages user={user} onRemoveMessage={removeMessageById} loading={loading}
                  items={items}/> :
    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={'Выбрите диалог'}/>
}

export default connect(
  ({messages, dialogs, user}) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    loading: messages.loading,
    user: user.data,
    error: messages.error
  }),
  messagesActions
)(Messages)
