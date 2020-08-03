import React from 'react'
import {Form, Input} from 'antd'
import {MailOutlined, LockOutlined} from '@ant-design/icons'
import {Button, Block} from '../../../components'
import {Link} from 'react-router-dom'
import {validateField} from '../../../utils/helpers'


const LoginForm = props => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props

  return (
    <>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            validateStatus={
              validateField('email', touched, errors)
            }
            hasFeedback
            help={touched.email && errors.email}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                   id={'email'}
                   placeholder="E-Mail"
                   type={'email'}
                   size={'large'}
                   onChange={handleChange}
                   onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={
              validateField('password', touched, errors)}
            hasFeedback
            help={touched.password && errors.password}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              id={'password'}
              type="password"
              placeholder="Пароль"
              size={'large'}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button disabled={isSubmitting} type="primary" htmlType="submit"
                    className="login-form-button" size={'large'}>
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className={'auth__register-link'} to={'/register'}>Зарегистрироваться</Link>
        </Form>
      </Block>
    </>
  )
}

export default LoginForm
