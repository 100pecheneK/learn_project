import React from 'react'
import './Home.scss'
import {Messages, Status, ChatInput} from '../../components'
import {Dialogs} from '../../containers'
import {TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined} from '@ant-design/icons'
import {Button, Input} from 'antd'

import dialogsJson from './dialogs.json'

const Home = () => {
  return (
    <section className={'home'}>
      <div className="chat">
        <div className="chat__sidebar">
            <Dialogs
              userId={1}
              items={dialogsJson}
            />
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div/>
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Притыкин Михаил</b>
              <div className="chat__dialog-header-status">
                <Status online={true}/>
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


    </section>
  )
}

export default Home
