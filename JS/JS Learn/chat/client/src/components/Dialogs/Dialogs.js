import React from 'react'
import './Dialogs.scss'
import {DialogItem} from '../'
import orderBy from 'lodash/orderBy'
import {Empty, Input, Spin} from 'antd'
import classNames from 'classnames'
import {DialogsSidebarHeader} from '../../containers'


const Dialogs = ({loading, items, userId, onSearch, currentDialogId, inputValue, onSelectDialog}) => (
  <>
    <DialogsSidebarHeader/>

    <div className="chat__sidebar-search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={onSearch}
        value={inputValue}
      />
    </div>
    <div className="chat__sidebar-dialogs">
      <div className={classNames("dialogs", {'dialogs--loading': loading})}>
        {loading ? <Spin tip="Загрузка..."/> : items.length ? orderBy(
          items,
          ['updatedAt'],
          ['desc']
        ).map(item => {
          return (
            <DialogItem
              onSelect={onSelectDialog}
              key={item._id}
              isMe={item.lastMessage?.user._id === userId}
              meId={userId}
              {...item}
              currentDialogId={currentDialogId}
            />
          )
        }) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Пусто'}/>}
      </div>
    </div>
  </>
)

export default Dialogs
