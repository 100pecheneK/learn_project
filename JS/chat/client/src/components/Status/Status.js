import React from 'react'
import './Status.scss'
import classNames from 'classnames'

const Status = ({online}) => (
  <span
    className={classNames("status", {'status--online': online})}>{online ? 'Онлайн' : 'Офлайн'}</span>
)

export default Status
