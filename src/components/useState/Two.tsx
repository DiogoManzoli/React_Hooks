import {useState} from "react"

const TwoState = () => {

    const [state,setState] = useState('');

    const infoName = (event) => {
        setState(event.target.value)
    } 

    return(
        <div>
            <input onChange={infoName} type="text" />
            <h2>{state}</h2>
        </div>
    )
}

export default TwoState