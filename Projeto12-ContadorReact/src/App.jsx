import { useState } from "react"

import './App.css'

export default function App(){
    const [numero, setNumero] = useState(0)

    function aumentar(){
        setNumero(numero + 1)
    }

    function diminuir(){
        setNumero(numero - 1)
    }

    function resetar(){
        setNumero(0)
    }

    return(
        <div className="container">
            <h1>Contador</h1>
            <p>{numero}</p>
            <div className="botoes">
                <button onClick={diminuir}>Menos</button>
                <button onClick={resetar}>Resetar</button>
                <button onClick={aumentar}>Mais</button>
            </div>
        </div>
    )
}