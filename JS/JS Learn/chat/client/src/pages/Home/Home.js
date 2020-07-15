import React from 'react'
import './Home.scss'
import {Dialogs, Message} from '../../components'

const Home = () => {
  return (
    <section className={'home'}>

      <Dialogs
        userId={1}
        items={[
          {
            _id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cumque et non placeat reprehenderit sequi. Ea in recusandae voluptate!',
            isReaded: false,
            created_at: new Date('Wed Jul 14 2020 10:01:47'),
            user: {
              _id: '125',
              fullname: 'Притыкин Михаил',
              avatar: null
            },
          },
          {
            _id: 2,
            text: 'A accusamus cumque et non placeat reprehenderit sequi. Ea in recusandae voluptate!',
            isReaded: false,
            created_at: new Date('Wed Jul 15 2020 10:01:48'),
            user: {
              _id: '123',
              fullname: 'анил Радостев',
              avatar: null
            },
          }
        ]}
      />

      {/*<Message*/}
      {/*  avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}*/}
      {/*  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequuntur deleniti dicta ea eaque,! 😃'}*/}
      {/*  date={new Date('Tue Apr 30 2020 08:51:14 GMT+0500 (Екатеринбург, стандартное время)')}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      filename: 'image.jpg',*/}
      {/*      url: 'https://source.unsplash.com/random/100x100?random=1'*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: 'image.jpg',*/}
      {/*      url: 'https://source.unsplash.com/random/100x100?random=2'*/}
      {/*    },*/}
      {/*    {*/}
      {/*      filename: 'image.jpg',*/}
      {/*      url: 'https://source.unsplash.com/random/100x100?random=3'*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={'https://sun9-59.userapi.com/c854224/v854224303/1f4a65/VVTOl-5_O8Q.jpg'}*/}
      {/*  text={'Привет! 😃'}*/}
      {/*  date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}*/}
      {/*  isMe={true}*/}
      {/*  isReaded={false}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={'https://sun9-59.userapi.com/c854224/v854224303/1f4a65/VVTOl-5_O8Q.jpg'}*/}
      {/*  text={'Привет! 😃'}*/}
      {/*  date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}*/}
      {/*  isMe={true}*/}
      {/*  isReaded={true}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}*/}
      {/*  date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      filename: 'image.jpg',*/}
      {/*      url: 'https://source.unsplash.com/random/100x100?random=1'*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}*/}
      {/*  isTyping={true}*/}
      {/*/>*/}
      <Message
        avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
        date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
        audio='https://notificationsounds.com/soundfiles/7750ca3559e5b8e1f44210283368fc16/file-sounds-1159-promise.mp3'
      />

    </section>
  )
}

export default Home
