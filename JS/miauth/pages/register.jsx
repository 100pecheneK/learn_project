import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    password: '',
  })
  const { email, password, name } = formValues

  const onInputChange = e => {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = () => {
    formValues
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: { 'Content-Type': 'application/json' },
    }).then(async res => {
      const result = await res.json()
      if (res.status === 200) {
        router.push('/login')
      } else {
        setError(JSON.stringify(result.error, null, 4))
      }
    })
  }
  return (
    <>
      <div>
        <input
          onChange={onInputChange}
          type='text'
          name='email'
          placeholder='email'
          value={email}
        />
        <input
          onChange={onInputChange}
          type='text'
          name='name'
          placeholder='name'
          value={name}
        />
        <input
          onChange={onInputChange}
          type='text'
          name='password'
          placeholder='password'
          value={password}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {error && <pre>{error}</pre>}
    </>
  )
}

// export const getServerSideProps = async ctx => {
//   const cookie = ctx.req?.headers.cookie
//   console.log(cookie)
//   // if (res.status === 401) {
//   //   if (ctx.res) {
//   //     ctx.res.setHeader('location', '/login')
//   //     ctx.res.statusCode = 302
//   //     return { props: {} }
//   //   }
//   // }
//   return { props: {} }
// }
