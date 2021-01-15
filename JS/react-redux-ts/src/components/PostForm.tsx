import React from 'react'
import { appActionCreators, appActions } from '../redux/app'
import { AlertStatus } from '../redux/app/@types'
import { postsActionCreators } from '../redux/posts'
import { useTypedDispatch } from '../redux/store'

const initialFormValues = { title: '' }

export default function PostForm() {
  const dispatch = useTypedDispatch()
  const [formValues, setFormValues] = React.useState(initialFormValues)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formValues.title.trim()) {
      dispatch(
        appActionCreators.showAlert({
          status: AlertStatus.DANGER,
          message: 'Post title required',
        })
      )
      return
    }
    const newPost = {
      ...formValues,
      id: Date.now().toString(),
    }

    dispatch(postsActionCreators.createPost(newPost))

    setFormValues(initialFormValues)
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Post title</label>
        <input
          type='text'
          className='form-control'
          id='title'
          value={formValues.title}
          name='title'
          onChange={onInputChange}
          autoComplete='off'
        />
      </div>
      <button className='btn btn-success' type='submit'>
        Create
      </button>
    </form>
  )
}
