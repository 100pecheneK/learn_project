import { useContext, useState } from 'react'
import { TodosContext } from '../contexts/TodosContext'
import Loader from './Loader'

export default function TodoForm() {
  const [loading, setLoading] = useState(false)
  const [todo, setTodo] = useState('')
  const { addTodo } = useContext(TodosContext)
  const handleSubmit = async e => {
    e.preventDefault()
    if (todo) {
      setLoading(true)
      await addTodo(todo)
      setLoading(false)
      setTodo('')
    }
  }
  return (
    <form className='form my-6' onSubmit={handleSubmit}>
      <div className='flex flex-col text-sm mb-2'>
        <label className='font-bold mb-2 text-gray-800' htmlFor='todo'>
          Todo
        </label>
        <input
          type='text'
          name='todo'
          id='todo'
          autoComplete='off'
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder='I whant to...'
          className={`border border-gray-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-gray-500 ${
            loading ? ' opacity-50' : ''
          }`}
          disabled={loading}
        />
      </div>
      <button
        className={`flex justify-center w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ${
          loading ? ' disabled:cursor-not-allowed disabled:opacity-50' : ''
        }`}
        type='submit'
        disabled={loading}
      >
        {loading && <Loader color={'text-white'} />}Submit
      </button>
    </form>
  )
}
