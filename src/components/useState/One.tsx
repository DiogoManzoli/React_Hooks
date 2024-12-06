import { useState } from 'react'

const One = () => {

const [state, setState] = useState(0);

function def(){
  setState(state + 1)
  console.log(state)
}

    return (
        <div>
          <button onClick={def}>BOTAO</button>
          <div>{state}</div>
        </div>
      )
}

export default One

// const [EstadoAtual, SetarEstado] = useState(valor que vai inicializar);