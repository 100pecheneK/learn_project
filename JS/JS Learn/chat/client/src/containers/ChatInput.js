import React, {useEffect, useState} from 'react'
import {ChatInput as BaseChatInput} from '../components'
import {connect} from 'react-redux'
import {messagesActions} from '../redux/actions'
import {filesApi} from '../utils/api'


const ChatInput = ({fetchSendMessage, currentDialogId}) => {
  const [fileList, setFileList] = useState([])
  const [fileListCount, setFileListCount] = useState(0)

  useEffect(() => {
    setFileListCount(fileList.length)
  }, [fileList.length])

  const [uploadingFiles, setUploadingFiles] = useState(false)
  const onSendMessage = (text) => {
    if (fileList.length) {
      const uploadFiles = []
      for (const file of fileList) {
        uploadFiles.push(filesApi.upload(file))
      }

      setUploadingFiles(true)
      Promise.all(uploadFiles).then((responses) => {
        setUploadingFiles(false)
        setFileList([])
        setFileListCount(0)

        const attachments = responses.map(r => r.data.file._id)
        fetchSendMessage({dialogId: currentDialogId, text, attachments})
      })
    } else {
      fetchSendMessage({dialogId: currentDialogId, text})
    }
  }

  return (
    <BaseChatInput
      isUploadingFiles={uploadingFiles}
      fileList={fileListCount}
      setFileList={setFileList}
      onSendMessage={onSendMessage}
    />
  )
}

export default connect(({dialogs}) => dialogs, messagesActions)(ChatInput)
