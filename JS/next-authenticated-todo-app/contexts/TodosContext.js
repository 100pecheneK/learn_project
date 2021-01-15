import { createContext, useState, useRef } from 'react'
const TodosContext = createContext()

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const refreshTodos = async () => {
    try {
      const res = await fetch('/api/getTodos')
      const latestTodos = await res.json()
      setTodos(latestTodos)
    } catch (e) {
      console.error(e)
    }
  }

  const addTodo = async description => {
    try {
      const res = await fetch('/api/createTodo', {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: { 'Content-Type': 'application/json' },
      })
      const newTodo = await res.json()
      setTodos(prevTodos => [newTodo, ...prevTodos])
    } catch (e) {
      console.error(e)
    }
  }
  const updateTodo = async updatedTodo => {
    try {
      await fetch('/api/updateTodo', {
        method: 'PUT',
        body: JSON.stringify(updatedTodo),
        headers: { 'Content-Type': 'application/json' },
      })
      setTodos(prevTodos => {
        const existingTodos = [...prevTodos]
        const existingTodo = existingTodos.find(
          todo => todo.id === updatedTodo.id
        )
        existingTodo.fields = updatedTodo.fields
        return existingTodos
      })
    } catch (e) {
      console.error(e)
    }
  }
  const deleteTodo = async id => {
    try {
      await fetch('/api/deleteTodo', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      })
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, refreshTodos, updateTodo, addTodo, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  )
}
export { TodosProvider, TodosContext }
