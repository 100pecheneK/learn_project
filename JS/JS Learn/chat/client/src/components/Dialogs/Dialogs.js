import React from 'react'
import './Dialogs.scss'
import {DialogItem} from '../'
import orderBy from 'lodash/orderBy'
import {TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined} from '@ant-design/icons'
import {Button, Empty, Input} from 'antd'

const Dialogs = ({items, userId, onSearch, inputValue}) => (
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
      <div className="dialogs">
        {items.length ? orderBy(
          items,
          ['created_at'],
          ['desc']
        ).map(item => (
          <DialogItem
            key={item._id}
            isMe={item.user._id === userId}
            {...item}
          />
        )) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Пусто'}/>}
      </div>
    </div>
  </>
)

export default Dialogs
