import React, {useEffect} from 'react'
import {Messages as BaseMessages} from '../components'
import {messagesActions} from '../redux/actions'
import {connect} from 'react-redux'
import {Empty} from 'antd'




const Messages = ({items, loading, fetchMessages, currentDialogId}) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId)
    }
  }, [currentDialogId, fetchMessages])

  return currentDialogId ? <BaseMessages loading={loading} items={items}/> :
    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={'Выбрите диалог'}/>
}

export default connect(
  ({messages, dialogs}) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    loading: messages.loading
  }),
  messagesActions
)(Messages)
