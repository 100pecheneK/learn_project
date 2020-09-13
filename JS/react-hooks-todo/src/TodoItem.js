import React, { useContext } from 'react'
import { Context } from './context'

export default function TodoItem({ title, id, completed }) {
  const { dispatch } = useContext(Context)

  const cls = ['todo']

  if (completed) {
    cls.push('complited')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'TOGGLE',
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => dispatch({
            type: 'DELETE',
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}