import React from 'react'
import { AlertType } from '../redux/app/@types'

type AlertProps = Omit<AlertType, 'id'> & { onClose: () => {} }

export default function Alert({ status, message, onClose }: AlertProps) {
  return (
    <div className={`bg-red-300 px-2 py-3 mb-3 alert-${status}`} role='alert'>
      {message}
      <button
        type='button'
        className='focus:outline-none ml-3'
        aria-label='Close'
        onClick={onClose}
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  )
}
