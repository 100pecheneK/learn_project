import React from 'react'
import './Home.scss'
import {Status, ChatInput} from '../../components'
import {Dialogs, Messages} from '../../containers'
import {EllipsisOutlined} from '@ant-design/icons'
import {Button} from 'antd'


const Home = () => {
  return (
    <section className={'home'}>
      <div className="chat">
        <div className="chat__sidebar">
          <Dialogs
            userId={1}
          />
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div/>
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Данил Радостев</b>
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
