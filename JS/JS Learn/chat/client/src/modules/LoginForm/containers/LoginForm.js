import {withFormik} from 'formik'
import {connect} from 'react-redux'

import LoginForm from '../components/LoginForm'
import validateForm from '../../../utils/validate'
import {openNotification} from '../../../utils/helpers'
import {userActions} from '../../../redux/actions'


const LoginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validate: values => {
    const errors = {}

    validateForm({isAuth: true, values, errors})

    return errors
  },

  handleSubmit: (values, {setSubmitting, props: {fetchUserLogin, history}}) => {

    fetchUserLogin(values).then(() => {
      openNotification({
        title: 'Добро пожаловать!',
        type: 'success'
      })
      setSubmitting(false)

      history.push('/')

    }).catch(() => {
      openNotification({
        title: 'Ошибка!',
        text: 'Неверный логин или пароль',
        type: 'error'
      })
      setSubmitting(false)
    })
  },

  displayName: 'LoginForm',
})(LoginForm)


export default connect(null, userActions)(LoginFormContainer)