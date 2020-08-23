import React from 'react'
import {validateField} from '../../utils/helpers'
import {Form, Input} from 'antd'


const FormField = ({name, id = name, placeholder, type = 'text', icon: Icon, handleChange, handleBlur, touched, errors, values}) => {
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      hasFeedback
      help={touched[name] && errors[name]}
    >
      <Input prefix={<Icon className="site-form-item-icon"/>}
             id={id}
             placeholder={placeholder}
             type={type}
             size={'large'}
             value={values[name]}
             onChange={handleChange}
             onBlur={handleBlur}
      />
    </Form.Item>
  )
}

export default FormField
