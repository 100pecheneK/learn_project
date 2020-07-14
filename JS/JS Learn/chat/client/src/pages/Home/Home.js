import React from 'react'
import './Home.scss'
import {Message, DialogItem} from '../../components'

const Home = () => {
  return (
    <section className={'home'}>
      <div className="dialogs">
        <DialogItem
          user={{
            fullname: 'Михаил Притыкин',
            isOnline: true
          }}
          unreaded={31}
        />
        <DialogItem
          user={{
            fullname: 'Михаил Притыкин',
            isOnline: false
          }}
          unreaded={3}
        />
        <DialogItem
          user={{
            fullname: 'Михаил Притыкин',
            isOnline: true
          }}
          // unreaded={3}
        />
      </div>
      {/*<Dialogs*/}
      {/*  items={[*/}
      {/*    {*/}
      {/*      user: {*/}
      {/*        fullname: 'Притыкин Михаил',*/}
      {/*        avatar: null*/}
      {/*      },*/}
      {/*      message: {*/}
      {/*        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus cumque et non placeat reprehenderit sequi. Ea in recusandae voluptate!',*/}
      {/*        isReaded: false,*/}
      {/*        created_at: new Date()*/}
      {/*      }*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*/>*/}

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

    </section>
  )
}

export default Home
