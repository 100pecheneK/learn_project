import React, {useState} from 'react'
import {DialogsSidebarHeader as DialogsSidebarHeaderBase} from '../components'
import {dialogsApi, userApi} from '../utils/api'
import {openNotification} from '../utils/helpers'


const DialogsSidebarHeader = () => {
  const [users, setUsers] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState('')

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }
  const onSearch = (value) => {
    setIsLoading(true)
    userApi.findUsers(value).then(({data}) => {
      setUsers(() => {
        setIsLoading(false)
        return data
      })
    }).catch(() => {
      setIsLoading(false)
    })
  }
  const onChangeSearchInput = (value) => {
    setSearchInputValue(value)
  }
  const onSelect = (userId) => {
    setSelectedUserId(userId)
  }
  const onAddDialog = () => {
    setIsLoading(true)
    dialogsApi.create(selectedUserId).then(() => {
      setIsLoading(false)
      closeModal()
    }).catch(() => {
      setIsLoading(false)
      openNotification({
        title: 'Внимание',
        text: 'У вас уже существует диалог с данным человеком',
        type: 'warning'
      })
    })
  }
  return (
    <DialogsSidebarHeaderBase
      users={users}
      onSearch={onSearch}
      onChangeSearchInput={onChangeSearchInput}
      modalVisible={modalVisible}
      searchInputValue={searchInputValue}
      onModalClose={closeModal}
      onOk={onAddDialog}
      onModalOpen={openModal}
      isLoading={isLoading}
      onSelect={onSelect}
    />
  )
}

export default DialogsSidebarHeader
