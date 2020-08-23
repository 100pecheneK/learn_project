import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Status as BaseStatus} from '../components'


const Status = ({dialogs: {currentDialogId, items, loading: dialogsLoading}, user: {data: {_id: meId}}}) => {
  const [online, setOnline] = useState(false)
  useEffect(() => {
    if (!dialogsLoading && currentDialogId) {
      const currentDialog = items.find(dialog => dialog._id === currentDialogId)
      if (currentDialog) {
        const partner = currentDialog.author._id === meId ? currentDialog.partner : currentDialog.author
        setOnline(partner.isOnline)
      }
    }
  }, [dialogsLoading, currentDialogId, meId, items])
  return (
    <BaseStatus online={online}/>
  )
}

export default connect(({dialogs, user}) => ({dialogs, user}))(Status)
