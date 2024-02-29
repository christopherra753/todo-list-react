import { RiAddCircleLine } from 'react-icons/ri'

export function Header () {
  return (
    <header>
      <h1>Lista de Tareas</h1>
      <h2>Has completado 3 de 4 tareas</h2>

      <form>
        <input type='text' placeholder='Buscar una tarea' />
        <button>Buscar</button>
      </form>

      <button>
        <RiAddCircleLine />
      </button>

      <section>
        <button>
          Todos
        </button>
        <button>
          Terminadas
        </button>
        <button>
          Incompletas
        </button>
      </section>
    </header>
  )
}
