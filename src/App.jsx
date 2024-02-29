import { useState } from 'react'

import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { NoTodos } from './components/NoTodos'
import { CreateTodo } from './components/CreateTodo'

function App () {
  const [todos, setTodos] = useState(null)

  const createTodo = (todo) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos, todo]
      return newTodos
    })
  }

  return (
    <div>
      <Header />
      <main>
        {
          todos
            ? <Todos />
            : <NoTodos />
        }
      </main>
      <CreateTodo createTodo={createTodo} />
    </div>
  )
}

export default App
