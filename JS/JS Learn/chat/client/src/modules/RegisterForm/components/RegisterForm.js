import React from 'react'
import {Form} from 'antd'
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons'
import {Block, Button, FormField} from '../../../components'
import {Link} from 'react-router-dom'


const RegisterForm = props => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    values
  } = props

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, нужно зарегистрироваться</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={handleSubmit}
        >
          <FormField
            name={'email'}
            values={values}
            type={'email'}
            placeholder={'E-Mail'}
            icon={MailOutlined}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
          />
          <FormField
            name={'fullname'}
            values={values}
            placeholder={'Как вас зовут?'}
            icon={UserOutlined}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
          />
          <FormField
            name={'password'}
            type={'password'}
            values={values}
            placeholder={'Пароль'}
            icon={LockOutlined}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
          />
          <FormField
            name={'password2'}
            type={'password'}
            values={values}
            placeholder={'Повторите пароль'}
            icon={LockOutlined}
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
          />
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" size={'large'}>
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className={'auth__register-link'} to={'/login'}>Войти в аккаунт</Link>
        </Form>
      </Block>
    </>
  )
}

export default RegisterForm
