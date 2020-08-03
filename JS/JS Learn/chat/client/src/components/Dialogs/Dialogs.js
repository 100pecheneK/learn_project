import React from 'react'
import './Dialogs.scss'
import {DialogItem} from '../'
import orderBy from 'lodash/orderBy'
import {TeamOutlined, FormOutlined} from '@ant-design/icons'
import {Button, Empty, Input, Spin} from 'antd'
import classNames from 'classnames'


const Dialogs = ({loading, items, userId, onSearch, currentDialogId, inputValue, onSelectDialog}) => (
  <>
    <div className="chat__sidebar-header">
      <div>
        <TeamOutlined/>
        <span>Список диалогов</span>
      </div>
      <Button type="link" shape="circle" icon={<FormOutlined/>}/>
    </div>

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
          ['created_at'],
          ['desc']
        ).map(item => {
          return (
            <DialogItem
              onSelect={onSelectDialog}
              key={item._id}
              isMe={item.author._id === userId}
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
