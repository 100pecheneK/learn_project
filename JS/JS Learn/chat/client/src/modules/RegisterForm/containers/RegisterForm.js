import {withFormik} from 'formik'
import RegisterForm from '../components/RegisterForm'
import validateForm from '../../../utils/validate'
import {openNotification} from '../../../utils/helpers'
import {userActions} from '../../../redux/actions'
import {connect} from 'react-redux'


const RegisterFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password2: ''
  }),
  validate: values => {
    const errors = {}

    validateForm({values, errors})

    return errors
  },

  handleSubmit: (values, {setSubmitting, props: {fetchUserRegister, history}}) => {
    fetchUserRegister(values).then(() => {
      openNotification({
        title: 'Регистрация прошла успешно!',
        text: 'Проверьте свою почту',
        type: 'success'
      })
      setSubmitting(false)
      setTimeout(() => {
        history.push('/register/verify')
      })
    }).catch((e) => {
      openNotification({
        title: 'Ошибка!',
        text: e.response.data.message,
        type: 'error'
      })
      setSubmitting(false)
    })
  },

  displayName: 'RegisterForm',
})
(RegisterForm)


export default connect(null, userActions)(RegisterFormContainer)