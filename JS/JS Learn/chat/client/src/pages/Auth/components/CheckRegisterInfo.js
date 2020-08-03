import React, {useEffect, useState} from 'react'
import {userApi} from '../../../utils/api'
import {Button, Result, Spin} from 'antd'
import {useHistory} from 'react-router'


const CheckRegisterInfo = ({location}) => {
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const hash = location.search.split('hash=')[1]
    if (hash) {
      userApi.verify(hash).then(() => {
        setVerified(true)
        setLoading(false)
      }).catch(() => {
        setError(true)
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [location.search])

  const verifyBlock = (
    <Result
      title="Подтвердите свой аккаунт"
      subTitle="На Вашу почту отправлено письмо с сылкой на подтверждение аккаунта"
    />
  )
  const verifiedBlock = (
    <Result
      status="success"
      title="Ваш аккаунт подтверждён"
      subTitle="Вы можете перейти в чат"
      extra={
        <Button type="primary" onClick={() => history.push('/login')}>
          На вход
        </Button>
      }
    />
  )
  const errorBlock = (
    <Result
      status="error"
      title="Ссылка неверная"
      subTitle="Убедитесь в правильности ссылки"
    />
  )

  return loading ? (<Spin tip="Проверка..."/>) : (
    <div className={'auth__success-block'}>
      {error && errorBlock}
      {verified && verifiedBlock}
      {!error && !verified && verifyBlock}
    </div>
  )
}

export default CheckRegisterInfo
