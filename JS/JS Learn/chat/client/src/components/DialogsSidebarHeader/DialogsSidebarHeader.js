import React from 'react'
import {Button, Modal, Select} from 'antd'
import {FormOutlined, TeamOutlined} from '@ant-design/icons'


const {Option} = Select

const DialogsSidebarHeader = ({
                                users,
                                onSearch,
                                onChangeSearchInput,
                                modalVisible,
                                searchInputValue,
                                onModalClose,
                                onModalOpen,
                                isLoading,
                                onOk,
                                onSelect
                              }) => {
  const options = users.map(user => (
    <Option key={user._id}>{user.fullname} [{user.email}]</Option>
  ))
  return (
    <div className="chat__sidebar-header">
      <div>
        <TeamOutlined/>
        <span>Список диалогов</span>
      </div>
      <Button onClick={onModalOpen} type="link" shape="circle" icon={<FormOutlined/>}/>
      <Modal
        title="Создать диалог"
        visible={modalVisible}
        onOk={onOk}
        okText={'Создать'}
        onCancel={onModalClose}
        cancelText={'Отмена'}
        confirmLoading={isLoading}
      >
        <Select
          loading={isLoading}
          showSearch
          value={searchInputValue}
          style={{width: '100%'}}
          onChange={onChangeSearchInput}
          onSearch={onSearch}
          filterOption={false}
          notFoundContent={null}
          onSelect={onSelect}
          allowClear={true}
        >
          {options}
        </Select>
      </Modal>
    </div>
  )
}

export default DialogsSidebarHeader
