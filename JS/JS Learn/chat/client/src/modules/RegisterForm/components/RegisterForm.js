import React from 'react'
import {Form, Input} from 'antd'
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons'
import {Button, Block} from '../../../components'
import {Link} from 'react-router-dom'
import {validateField} from '../../../utils/helpers'

const success = false
const RegisterForm = props => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ?
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
          >
            <Form.Item
              validateStatus={validateField('email', touched, errors)}
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
              name="username"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="Ваше имя"
                size={'large'}
                id={'fullname'}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField('password', touched, errors)}
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
            <Form.Item
              validateStatus={validateField('password2', touched, errors)}
              hasFeedback
              help={touched.password2 && errors.password2}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon"/>}
                placeholder="Повторите пароль"
                size={'large'}
                type="password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" size={'large'}>
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className={'auth__register-link'} to={'/login'}>Войти в аккаунт</Link>
          </Form>
          :
          <div className={'auth__success-block'}>
            <InfoCircleTwoTone style={{fontSize: '40px'}}/>
            <h3>Подтвердите свой аккаунт</h3>
            <p>На Вашу почту отправлено письмо с сылкой на подтверждение аккаунта</p>
          </div>
        }
      </Block>
    </>
  )
}

export default RegisterForm
