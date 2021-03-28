import { TLocationState } from '@/@types/TLocationState'
import { authActionCreators, authSelectors } from '@/redux/auth'
import { ChangePasswordType } from '@/redux/auth/@types'
import { useTypedDispatch } from '@/redux/store'
import Form from '@components/Form'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

export default function PasswordPage() {
  const history = useHistory()
  const dispatch = useTypedDispatch()
  const isPasswordChangeSuccess = useSelector(
    authSelectors.isPasswordChangeSuccess
  )
  const location = useLocation<TLocationState>()
  const { from } = location.state || { from: { pathname: '/' } }

  useEffect(() => {
    if (isPasswordChangeSuccess) {
      history.replace(from)
    }
  }, [isPasswordChangeSuccess, from])

  const onSubmit = (form: ChangePasswordType) => {
    dispatch(authActionCreators.changePassword(form))
  }

  return (
    <Form
      onSubmit={onSubmit}
      inputs={[
        {
          type: 'text',
          name: 'username',
          autoComplete: 'username',
          hidden: true,
        },
        {
          type: 'password',
          name: 'oldPassword',
          placeholder: 'Input current password',
          autoComplete: 'current-password',
          required: true,
        },
        {
          type: 'password',
          name: 'newPassword',
          placeholder: 'Input new password',
          autoComplete: 'new-password',
          required: true,
        },
      ]}
      submitButtonText={'Confirm'}
    />
  )
}
