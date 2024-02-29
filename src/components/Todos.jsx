import { RiCheckLine, RiDeleteBin7Line } from 'react-icons/ri'

export function Todos () {
  return (
    <ul>
      <li>
        <div>
          <h3>Título</h3>
          <p>Lavar los platos</p>
        </div>

        <div>
          <h3>Fecha de creación</h3>
          <p>12/07/2023</p>
        </div>

        <button>
          Ver detalle
        </button>

        <section>
          <button>
            <RiCheckLine />
          </button>

          <button>
            <RiDeleteBin7Line />
          </button>
        </section>
      </li>
    </ul>
  )
}
