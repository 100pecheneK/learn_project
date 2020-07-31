import React, {useEffect, useState} from 'react'
import Form from "../components/TodoForm/Form"
import List from "../components/List/List"
import {ITask} from "../interfaces"


declare let confirm: (question: string) => boolean

const TasksPage: React.FC = () => {
  const [settings, setSettings] = useState({deleteWithoutConfirm: false})
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}')
    const data = JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[]
    setSettings(settings)
    setTasks(data)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings))
  }, [settings])

  const addHandler = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      done: false
    }
    setTasks(prevState => [...prevState, newTodo])
  }

  const doneHandler = (id: number) => {
    setTasks(prevState => prevState.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    }))
  }

  const deleteHandler = (id: number) => {
    if (settings.deleteWithoutConfirm || confirm('Вы уверены, что хотите удалить?')) {
      setTasks(prevState => prevState.filter(task => task.id !== id))
    }
  }
  return (
    <>
      <section className="container container--shadow">
        <h1>Список задач</h1>
        <Form onAdd={addHandler}/>
        <input
          style={{marginTop: '1em'}}
          id='deleteWithoutConfirm'
          type="checkbox"
          checked={settings.deleteWithoutConfirm}
          onChange={() => setSettings(prev => ({
            ...prev,
            deleteWithoutConfirm: !prev.deleteWithoutConfirm
          }))}
        />
        <label htmlFor="deleteWithoutConfirm">Удалять без подтверждения</label>
      </section>
      {
        tasks.length > 0 && <section className="container container--shadow">
          <List
            tasks={tasks}
            onDone={doneHandler}
            onDelete={deleteHandler}
          />
        </section>
      }
    </>
  )
}

export default TasksPage
