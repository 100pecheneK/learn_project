import React from 'react'
import './DialogItem.scss'
import classNames from 'classnames'
import {Time, IconReaded} from '../'

const getAvatar = (avatar, name) => {
  if (avatar) {
    return (
      <img src={avatar} alt={`${name} avatar`}/>
    )
  } else {
    //  make avatar
  }
}

const DialogItem = ({user, message, unreaded}) => (
  <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
    <div className="dialogs__item-avatar">
      {getAvatar(
        'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1',
        'Misha'
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {/*<Time date={new Date()}/>*/}
          13:02
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, incidunt?</p>
        {unreaded > 0 &&
        <IconReaded isMe={true} isReaded={true}/>}
        <div className={'dialogs__item-info-bottom-count'}>{unreaded > 9 ? '+9' : unreaded}</div>
      </div>
    </div>
  </div>
)

export default DialogItem
