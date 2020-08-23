import React, {useEffect, useRef} from 'react'
import './Messages.scss'
import {Empty, Spin} from 'antd'
import {Message} from '../'
import classNames from 'classnames'


const Messages = ({user, loading, items, onRemoveMessage}) => {
  const messagesRef = useRef(null)

  useEffect(() => {
    if (items) {
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight)
    }
  }, [items, messagesRef])
  return (
    <div ref={messagesRef} className={classNames("messages", {'messages--loading': loading})}>
      {loading ? <Spin tip="Загрузка..."/> : (
        <>
          {items.length ? items.map(item =>
              <Message
                isMe={user._id === item.user._id}
                key={item._id}
                onRemoveMessage={onRemoveMessage.bind(null, item._id)}
                {...item}
              />) :
            <Empty
              image={Empty.PRESENTED_IMAGE_DEFAULT}
              description={'Сообщений нет'}
            />}
        </>
      )}
    </div>
  )

}

export default Messages
