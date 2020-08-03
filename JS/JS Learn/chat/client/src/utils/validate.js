export default ({isAuth, values, errors}) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = 'Введите E-Mail'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неверный E-Mail'
      }
    },
    password: value => {
      if (!value) {
        errors.password = 'Введите пароль'
      }
    },
    password2: value => {
      if (!value) {
        errors.password2 = 'Повторите пароль'
      }
      if (values.password && values.password !== values.password2) {
        errors.password2 = 'Пароли не совпадают'
      }
    },
    fullname: value =>{
      if (!isAuth && !value) {
        errors.fullname = 'Укажите свои имя и фамилию'
      }
    }
  }

  Object.keys(values)
    .forEach(
      key => rules[key] && rules[key](values[key])
    )
}
