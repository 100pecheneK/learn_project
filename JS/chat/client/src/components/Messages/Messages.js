import React, {useEffect, useRef} from 'react'
import './Messages.scss'
import {Empty, Spin} from 'antd'
import {Message} from '../'
import classNames from 'classnames'


const Messages = ({loading, items}) => {
  const messagesRef = useRef(null)
  useEffect(() => {
    if (items) {
      messagesRef.current.scrollTo(0, 9999)
    }
  }, [items])
  return (
      <div ref={messagesRef} className={classNames("messages", {'messages--loading': loading})}>
        {loading ? <Spin tip="Загрузка..."/> : (
          <>
            {items.length ? items.map(item => <Message key={item._id} {...item}/>) :
              <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={'Сообщений нет'}/>}
          </>
        )}
      </div>
  )

}

export default Messages
