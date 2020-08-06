import React from 'react'
import './Home.scss'
import {ChatInput, Dialogs, Messages, Status, PartnerFullname} from '../../containers'
import {EllipsisOutlined} from '@ant-design/icons'
import {Button, Spin} from 'antd'
import {connect} from 'react-redux'
import classNames from 'classnames'


const Home = ({user}) => {
  return (
    <section className={classNames('home',
      {'home--loading': user.loading}
    )}>
      {user.loading ? <Spin tip="Загрузка Ваших данных..."/> :
        <div className="chat">
          <div className="chat__sidebar">
            <Dialogs
              userId={user.data._id}
            />
          </div>
          <div className="chat__dialog">
            <div className="chat__dialog-header">
              <div/>
              <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">
                  <PartnerFullname/>
                </b>
                <div className="chat__dialog-header-status">
                  <Status/>
                </div>
              </div>
              <Button type="link" shape="circle" icon={<EllipsisOutlined/>}/>
            </div>
            <div className="chat__dialog-messages">
              <Messages/>
            </div>
            <div className="chat__dialog-input">
              <ChatInput/>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default connect(({user}) => ({user}))(Home)
