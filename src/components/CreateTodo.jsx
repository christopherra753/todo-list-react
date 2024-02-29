import { useState } from 'react'

export function CreateTodo ({ createTodo }) {
  const [data, setData] = useState({
    title: '',
    description: '',
    deadline: '',
    state: false

  })

  const handleChangeTitle = (event) => {
    setData(prevData => {
      const newData = { ...prevData, title: event.target.value }
      return newData
    })
  }

  const handleChangeDescription = (event) => {
    setData(prevData => {
      const newData = { ...prevData, description: event.target.value }
      return newData
    })
  }

  const handleChangeDeadline = (event) => {
    setData(prevData => {
      const newData = { ...prevData, deadline: event.target.value }
      return newData
    })
  }

  const handleChangeState = (event) => {
    const newState = Boolean(event.target.value)

    setData(prevData => {
      const newData = { ...prevData, state: newState }
      return newData
    })
  }

  const handleSubmitCreate = (event) => {
    event.preventDefault()

    // Le agregamos la id y la fecha de creacion del todo
    const newTodo = {
      ...data,
      id: crypto.randomUUID(),
      creationAt: new Date().toISOString()
    }

    console.log(newTodo)
  }

  return (
    <section>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmitCreate}>
        <div>
          <label htmlFor='title'>Título</label>
          <input onChange={handleChangeTitle} value={data.title} id='title' type='text' placeholder='Ingrese un titulo' />
        </div>

        <div>
          <label htmlFor='description'>Descripción</label>
          <textarea onChange={handleChangeDescription} value={data.description} id='description' cols='30' rows='3' placeholder='Ingrese una descripción' />
        </div>

        <div>
          <label htmlFor='deadline'>Fecha Límite</label>
          <input onChange={handleChangeDeadline} valzue={data.deadline} type='date' id='dadline' />
        </div>

        <div>
          <label htmlFor='state'>Estado</label>
          <select onChange={handleChangeState} value={data.state} id='state'>
            <option value='false'>Incompleto</option>
            <option value='true'>Completo</option>
          </select>
        </div>

        <button>Registrar</button>
      </form>
    </section>
  )
}
