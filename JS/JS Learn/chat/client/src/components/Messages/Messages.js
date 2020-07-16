import React from 'react'
import './Messages.scss'
import {Empty} from 'antd'
import {Message} from '../'

const Messages = ({items}) => {
  return items ? (
      <>
        <Message
          avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequuntur deleniti dicta ea eaque,! 😃'}
          date={new Date('Tue Apr 30 2020 08:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=1'
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=2'
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=3'
            }
          ]}
        />
        <Message
          avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequuntur deleniti dicta ea eaque,! 😃'}
          date={new Date('Tue Apr 30 2020 08:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=1'
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=2'
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=3'
            }
          ]}
        />
        <Message
          avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae consequuntur deleniti dicta ea eaque,! 😃'}
          date={new Date('Tue Apr 30 2020 08:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
        />
        <Message
          avatar={'https://sun9-59.userapi.com/c854224/v854224303/1f4a65/VVTOl-5_O8Q.jpg'}
          text={'Привет! 😃'}
          date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          isMe={true}
          isReaded={false}
        />
        <Message
          avatar={'https://sun9-59.userapi.com/c854224/v854224303/1f4a65/VVTOl-5_O8Q.jpg'}
          text={'Привет! 😃'}
          date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          isMe={true}
          isReaded={false}
        />
        <Message
          avatar={'https://sun9-59.userapi.com/c854224/v854224303/1f4a65/VVTOl-5_O8Q.jpg'}
          text={'Привет! 😃'}
          date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          isMe={true}
          isReaded={true}
        />
        <Message
          avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
          date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/random/100x100?random=1'
            }
          ]}
        />
        <Message
          avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
          isTyping={true}
        />
        <Message
          avatar={'https://sun9-8.userapi.com/wWZ0TSfUiBdXHPeApKu9JQP7yLKu7I-arPoeFw/PKYTGoe19wk.jpg?ava=1'}
          date={new Date('Tue Jul 14 2020 04:51:14 GMT+0500 (Екатеринбург, стандартное время)')}
          audio='https://notificationsounds.com/soundfiles/7750ca3559e5b8e1f44210283368fc16/file-sounds-1159-promise.mp3'
        />
      </>
    ) :
    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} description={'Откройте диалог'}/>

}

export default Messages
