import { useState } from 'react'

const OneState = () => {

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

export default OneState

// const [EstadoAtual, SetarEstado] = useState(valor que vai inicializar);
// o useState basicamente assisti/monitora da variável em tempo real e toda vez que o valor dessa varíavel mudar a gente pode fazer algo.