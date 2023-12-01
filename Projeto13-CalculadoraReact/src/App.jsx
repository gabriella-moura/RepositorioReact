import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState("");
  
  return (
    <div className="caixa">
      <div className="calculadora">
        <form action="">
          <div className="tela">
            <input type="text" name="" id="" value={valor}/>
          </div>
          <div>
            <input type="button" value="AC" name="" id="" onClick={e => setValor("")}/>
            <input type="button" value="DE" name="" id="" onClick={e => setValor(valor.slice(0, -1))}/>
            <input type="button" value="." name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="/" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="8" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="9" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="*" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="5" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="6" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="+" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="2" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="3" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="-" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input type="button" value="0" name="" id="" onClick={e => setValor(valor + e.target.value)}/>
            <input className="igual" type="button" value="=" name="" id="" onClick={e => setValor(eval(valor))}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
