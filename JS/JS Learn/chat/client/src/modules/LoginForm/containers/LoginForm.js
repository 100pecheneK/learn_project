import {withFormik} from 'formik'
import LoginForm from '../components/LoginForm'
import validateForm from '../../../utils/validate'
import {axios} from '../../../core'


export default withFormik({
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

  handleSubmit: (values, {setSubmitting, setStatus}) => {
    return axios.post('/user/login', values).then(({data}) => {
      console.log(data)
      setSubmitting(false)
    }).catch((e) => {
      console.log(e.response.data)
      setSubmitting(false)
      setStatus()
    })
  },

  displayName: 'LoginForm',
})(LoginForm)