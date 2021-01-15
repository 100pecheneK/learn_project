import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import TodoForm from '../components/TodoForm'
import { TodosContext } from '../contexts/TodosContext'
import database from './api/utils/Database'
import auth0 from './api/utils/auth0'

export default function Home({ initialTodos, user }) {
  const { todos, setTodos } = useContext(TodosContext)
  
  useEffect(() => {
    setTodos(initialTodos)
  }, [])

  return (
    <div>
      <Head>
        <title>Todo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar user={user} />
      {user ? (
        <>
          <TodoForm />
          <main>
            <h1 className='text-2xl text-center mb-4'>My Todos</h1>
            <ul>
              {todos && todos.map(todo => <Todo key={todo.id} todo={todo} />)}
            </ul>
          </main>
        </>
      ) : (
        <p>You should login to create any todo here.</p>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req)
  let todos = []

  try {
    if (session?.user) {
      todos = await database.getAll({
        filter: {
          field: 'userId',
          value: session.user.sub,
        },
      })
      // console.log(todos);
    }
    return {
      props: {
        initialTodos: todos,
        user: session?.user || null,
      },
    }
  } catch (e) {
    return { props: { err: 'Something went wrong' } }
  }
}
