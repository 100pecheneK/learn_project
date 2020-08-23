import {useEffect, useState} from 'react'
import {connect} from 'react-redux'


const PartnerFullname = ({dialogs: {currentDialogId, items, loading: dialogsLoading}, user: {data: {_id: meId}}}) => {
  const [fullname, setFullname] = useState('')
  useEffect(() => {
    if (!dialogsLoading && currentDialogId) {
      const currentDialog = items.find(dialog => dialog._id === currentDialogId)
      if (currentDialog) {
        const partner = currentDialog.author._id === meId ? currentDialog.partner : currentDialog.author
        setFullname(partner.fullname)
      }
    }
  }, [dialogsLoading, currentDialogId, items, meId])
  return fullname
}

export default connect(({dialogs, user}) => ({dialogs, user}))(PartnerFullname)
