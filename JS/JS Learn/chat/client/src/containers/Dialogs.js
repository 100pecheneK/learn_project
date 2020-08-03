import React, {useEffect, useState} from 'react'
import {Dialogs as BaseDialogs} from '../components'
import {dialogsActions} from '../redux/actions'
import {connect} from 'react-redux'


const Dialogs = ({items, loading, userId, fetchDialogs, currentDialogId, setCurrentDialogId}) => {
  const [inputValue, setInputValue] = useState('')
  const [filtered, setFiltered] = useState(Array.from(items || []))

  useEffect(() => {
    if (!items) {
      fetchDialogs()
    } else {
      setFiltered(items)
    }
  }, [items, fetchDialogs])

  const onChangeInput = e => {
    const value = e.target.value
    if (items) {
      setFiltered(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0))
    }
    setInputValue(value)
  }

  const onSelectDialog = id => {
    if (id !== currentDialogId) {
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
