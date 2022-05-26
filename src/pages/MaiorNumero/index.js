import { useState } from "react"
import axios from "axios"

export default function index() {
    const [numeros,setNumeros] = useState ([]);
    const [numero,setNumero] = useState ([0]);
    const [resposta,setResposta] = useState('');

    function adicionar (){
        setNumeros([...numeros, numero])
        setNumero('');
    }

    async function verificarMaior (){
       const resp = await axios.post('http://localhost:5000/dia2/MaiorNumero', numeros);
       setResposta(resp.data.maior);
    }
    return (
        <main>
            <h1>MAIOR NUMERO</h1>
            <div>
                numero: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} /> 
                <button onClick={adicionar}> adicionar numero </button> 

            </div>

            <div> 
                {numeros.map(item =>
                <div> {item} </div>
                )}
            </div>
            

            <div>
                <button onClick={verificarMaior}>verificar</button> maior e {resposta}

            </div>


        </main>
    )
}