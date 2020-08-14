import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Message.scss'
import {Avatar, IconReaded, Time} from '../'
import waveSvg from '../../assets/img/wave.svg'
import playSvg from '../../assets/img/play.svg'
import pauseSvg from '../../assets/img/pause.svg'
import {convertToTime, openNotification} from '../../utils/helpers'
import {Button, Popover} from 'antd'


const MessageAudio = ({audio}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioElem = useRef(null)
  useEffect(() => {
    audioElem.current.onloadedmetadata = () => {
      setCurrentTime(audioElem.current.duration
      )
    }
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaying(false)
        setProgress(0)
        setCurrentTime(audioElem.current.duration)
      }
    )
    audioElem.current.addEventListener(
      'timeupdate',
      () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0
        setCurrentTime(audioElem.current.duration - audioElem.current.currentTime)
        setProgress((audioElem.current.currentTime / duration) * 100)
      }
    )
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioElem.current.pause()
      setIsPlaying(false)
    } else {
      audioElem.current.volume = '0.8'
      audioElem.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className={'message__audio'}>
      <audio ref={audioElem} src={audio} preload='auto'/>
      <div className="message__audio-progress" style={{width: `${progress}%`}}/>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ?
              <img src={pauseSvg} alt="Pause svg"/> :
              <img src={playSvg} alt="Play svg"/>
            }
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg"/>
        </div>
        <span className='message__audio-duration'>{convertToTime(currentTime)}</span>
      </div>
    </div>
  )
}

const Message = ({isMe, user, text, created_at, audio, isReaded, onRemoveMessage, attachments, isTyping}) => {
  const onAddToClipboard = () => {
    navigator.clipboard.writeText(text).then(() =>
      openNotification({
        'title': 'Скопировано',
        'type': 'success'
      })
    ).catch(() =>
      openNotification({
        'title': 'Ошибка',
        'type': 'error'
      }))
  }
  return (
    <div className={classNames('message', {
      'message--isme': isMe,
      'message--is-typing': isTyping,
      'message--is-audio': audio,
      'message--image': attachments?.length === 1,
    })}>
      <div className={'message__content'}>
        <IconReaded isMe={isMe} isReaded={isReaded}/>

        <div className="message__avatar">
          <Avatar user={user}/>
        </div>
        <Popover
          content={
            <>
              <Button onClick={onAddToClipboard} block type="primary">Скопировать</Button>
              {isMe && <Button onClick={onRemoveMessage} block danger style={{marginTop: '1em'}}>Удалить
                сообщение</Button>}
            </>
          }
          title='Действия'
          trigger='click'
        >
          <div className="message__info">
            {(text || audio || isTyping) && <div className="message__bubble">
              {text &&
              <p
                className={'message__text'}
              >
                {text}
              </p>
              }
              {isTyping && (
                <div className="message__typing">
                  <span/>
                  <span/>
                  <span/>
                </div>
              )}
              {audio && <MessageAudio audio={audio}/>}
            </div>}
            {attachments && (
              <div className="message__attachments">
                {attachments.map((attachment, index) => (
                  <div key={index} className="message__attachments-item">
                    <img src={attachment.url} alt={attachment.filename}/>
                  </div>
                ))}
              </div>
            )}
            {created_at && <span className="message__date">
          <Time date={created_at}/>
        </span>}

          </div>
        </Popover>
      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {},
}


Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  created_at: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string,
}
export default Message
