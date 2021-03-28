import { TLocationState } from '@/@types/TLocationState'
import { authActionCreators, authSelectors } from '@/redux/auth'
import { useTypedDispatch } from '@/redux/store'
import Form from '@components/Form'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

function RegisterPage() {
  const history = useHistory()
  const dispatch = useTypedDispatch()
  const user = useSelector(authSelectors.user)
  const isUserLoading = useSelector(authSelectors.isLoading)
  const location = useLocation<TLocationState>()
  const { from } = location.state || { from: { pathname: '/' } }

  const onSubmit = useCallback(
    async form => {
      dispatch(authActionCreators.register(form))
      if (user) {
        history.replace('/')
      }
    },
    [history]
  )

  useEffect(() => {
    if (user) {
      history.replace(from)
    }
  }, [user])
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
          type: 'text',
          name: 'phone',
          placeholder: 'Input phone',
          autoComplete: 'phone',
          required: true,
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Input password',
          autoComplete: 'new-password',
          required: true,
          minLength: 3,
        },
      ]}
      submitButtonText={'Register'}
    />
  )
}

export default RegisterPage
