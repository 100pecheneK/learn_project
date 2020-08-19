import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'
import {Avatar, IconReaded} from '../'
import differenceInMinutes from 'date-fns/differenceInMinutes'


const getMessageTime = createdAt => {
  const date = new Date(createdAt)
  if (isToday(date)) {
    return format(
      date, 'HH:mm'
    )
  } else {
    return format(
      date, 'dd.MM.yyyy'
    )
  }
}


const DialogItem = ({_id, meId, author, partner, lastMessage, currentDialogId, isMe, onSelect}) => {
  const user = author._id === meId ? partner : author
  const isOnline = differenceInMinutes(new Date(), new Date(user.last_seen)) < 1
  return (
    <div className={classNames('dialogs__item',
      {'dialogs__item--online': isOnline},
      {'dialogs__item--selected': currentDialogId === _id}
    )}
         onClick={onSelect.bind(this, _id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user}/>
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>
          {lastMessage && getMessageTime(lastMessage.createdAt)}
        </span>
        </div>
        {lastMessage &&
        <div className="dialogs__item-info-bottom">
          <p>{lastMessage.text}</p>
          {isMe ? <IconReaded isMe={true} isReaded={lastMessage.readed}/> :
            lastMessage.unreadMessages > 0 &&
            <div
              className={'dialogs__item-info-bottom-count'}>{lastMessage.unreadMessages > 9 ? '+9' : lastMessage.unreadMessages}</div>
          }
        </div>
        }
      </div>
    </div>
  )
}

export default DialogItem
