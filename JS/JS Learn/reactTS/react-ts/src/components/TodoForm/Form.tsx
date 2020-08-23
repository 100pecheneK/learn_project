import React, {useState, useRef} from 'react'
import './Form.scss'


interface IForm {
  onAdd(title: string): void
}

const Form: React.FC<IForm> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onSubmit = (value: string) => {
    if (value) {
      onAdd(value)
      setTitle('')
    }
  }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(title)
    }
  }

  const clickHandler = () => {
    onSubmit(title)
  }
  return (
    <div className='form'>
      <div className='input-field'>
        <label htmlFor="title">Введите задачу</label>
        <input
          type="text"
          id='title'
          ref={ref}
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
        />
      </div>
      <button
        className='btn'
        onClick={clickHandler}
      >
        Добавить
      </button>
    </div>
  )
}

export default Form
