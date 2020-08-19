import React from 'react'
import './Home.scss'
import {ChatInput, Dialogs, Messages, Status, PartnerFullname} from '../../containers'
import {EllipsisOutlined} from '@ant-design/icons'
import {Button, Popover, Spin} from 'antd'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {userActions} from '../../redux/actions'


const Home = ({user, currentDialogId, logout}) => {
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
                {currentDialogId &&
                <>
                  <b className="chat__dialog-header-username">
                    <PartnerFullname/>
                  </b>
                  <div className="chat__dialog-header-status">
                    <Status/>
                  </div>
                </>
                }
              </div>
              <Popover
                content={
                  <>
                    <Button onClick={logout} block danger>Выйти</Button>
                  </>
                }
                title='Настройки'
                trigger='click'
              >
                <Button type="link" shape="circle" icon={<EllipsisOutlined/>}/>
              </Popover>
            </div>
            <div className="chat__dialog-messages">
              <Messages/>
            </div>
            {
              currentDialogId &&
              <div className="chat__dialog-input">
                <ChatInput/>
              </div>
            }
          </div>
        </div>
      }
    </section>
  )
}

export default connect(
  ({user, dialogs}) => ({
    user,
    currentDialogId: dialogs.currentDialogId
  }),
  userActions)(Home)
