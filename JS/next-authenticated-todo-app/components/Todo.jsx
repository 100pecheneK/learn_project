import React, { useContext, useState } from 'react'
import { TodosContext } from '../contexts/TodosContext'
import Loader from './Loader'

export default function Todo({ todo: { fields, id } }) {
  const { updateTodo, deleteTodo } = useContext(TodosContext)
  const [loading, setLoading] = useState(false)

  const handleToggleCompleted = async () => {
    const updatedFields = {
      ...fields,
      completed: !fields.completed,
    }
    const updatedTodo = {
      id,
      fields: updatedFields,
    }
    setLoading(true)
    await updateTodo(updatedTodo)
    setLoading(false)
  }

  const onDelete = async () => {
    setLoading(true)
    await deleteTodo(id)
  }

  return (
    <li
      className={`bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4 ${
        loading ? 'opacity-50' : ''
      }`}
    >
      {loading ? (
        <Loader />
      ) : (
        <input
          type='checkbox'
          name='completed'
          id='completed'
          checked={fields.completed}
          className='mr-2 form-checkbox h-5 w-5'
          onChange={handleToggleCompleted}
        />
      )}
      <p
        className={`flex-1 text-gray-800 ${
          fields.completed ? 'line-through' : ''
        }`}
        style={{'wordBreak': 'break-word'}}
      >
        {fields.description}
      </p>
      <button
        type='button'
        className={`text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded ${
          loading ? 'cursor-not-allowed' : ''
        }`}
        onClick={onDelete}
        disabled={loading}
      >
        Delete
      </button>
    </li>
  )
}
