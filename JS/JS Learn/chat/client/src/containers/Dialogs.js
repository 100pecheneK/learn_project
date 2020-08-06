import React, {useEffect, useState} from 'react'
import {Dialogs as BaseDialogs} from '../components'
import {dialogsActions} from '../redux/actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router'
import socket from '../core/socket'


const Dialogs = ({items, loading, userId, fetchDialogs, currentDialogId, setCurrentDialogId}) => {
  const [inputValue, setInputValue] = useState('')
  const [filtered, setFiltered] = useState(Array.from(items || []))
  const history = useHistory()
  useEffect(() => {
    if (!items) {
      fetchDialogs()
    } else {
      setFiltered(items)
    }
  }, [items, fetchDialogs])

  const onNewDialog = () => {
    fetchDialogs()
  }
  useEffect(() => {
    socket.on('SERVER:DIALOG_CREATED', onNewDialog)

    return () => {
      socket.off('SERVER:DIALOG_CREATED')
    }
  }, [fetchDialogs, onNewDialog])

  const onChangeInput = e => {
    const value = e.target.value
    if (items) {
      setFiltered(items.filter(dialog => {
        if (userId === dialog.author._id) {
          return dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
        }
        return dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0

      }))
    }
    setInputValue(value)
  }

  const onSelectDialog = id => {
    if (id !== currentDialogId) {
      history.push(`/dialog/${id}`)
      setCurrentDialogId(id)
    }
  }
  return <BaseDialogs
    userId={userId}
    items={filtered}
    loading={loading}
    onSearch={onChangeInput}
    inputValue={inputValue}
    onSelectDialog={onSelectDialog}
    currentDialogId={currentDialogId}
  />
}

export default connect(
  ({dialogs}) => dialogs,
  dialogsActions
)(Dialogs)
