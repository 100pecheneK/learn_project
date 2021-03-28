import { TLocationState } from '@/@types/TLocationState'
import { authActionCreators, authSelectors } from '@/redux/auth'
import { AuthorizationParamsType } from '@/redux/auth/@types'
import { useTypedDispatch } from '@/redux/store'
import Form from '@components/Form'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

function LoginPage() {
  const history = useHistory()
  const location = useLocation<TLocationState>()
  const { from } = location.state || { from: { pathname: '/' } }
  const dispatch = useTypedDispatch()
  const user = useSelector(authSelectors.user)
  const isUserLoading = useSelector(authSelectors.isLoading)
  useEffect(() => {
    if (user) {
      history.replace(from)
    }
  }, [user])
  const onSubmit = (form: AuthorizationParamsType) => {
    dispatch(authActionCreators.login(form))
  }
  if (isUserLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <Form
      onSubmit={onSubmit}
      inputs={[
        {
          type: 'text',
          name: 'username',
          placeholder: 'Input username',
          autoComplete: 'username',
          required: true,
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Input password',
          autoComplete: 'current-password',
          required: true,
          minLength: 3,
        },
      ]}
      submitButtonText={'Log in'}
    />
  )
}

export default LoginPage
