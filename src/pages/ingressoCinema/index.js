import { useState } from "react";
import axios from "axios"

export default function index(){
    const [inteira,setInteira] = useState (0);
    const [meia,setMeia] = useState (0);
    const [diasemana,setDiaSemana] = useState ('');
    const [nacionalidade,setNacionalidade] = useState ('');
    const [total, seTotal] = useState (0);

    async function calcular() {
            const resp = await axios.post('http://localhost:5000/dia2/ingressoCinema', {
                inteira: inteira,
                meia: meia,
                diasemana: diasemana,
                nacionalida: nacionalidade

            })

            setTotal(resp.data.total);
    }
    return (
        <main>
            <h1>INGRESSO CINEMA</h1>
        <div>
            inteira: <input type='text' value={inteira} onChange={e => setInteira(Number(e.target.value))} />
        </div> 

        <div>
            meia: <input type='text' value={meia} onChange={e => setMeia(Number(e.target.value))} /> 
        </div>

        <div>
            dia da semana: <input type='text' value={diasemana} onChange={e => setDiaSemana(Number(e.target.value))} /> 
        </div>

        <div>
            nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(Number(e.target.value))} /> 
        </div>

        <div>
            <button onClick={calcular}>calcular</button>
        </div>

        <div>
            o total e {total}
        </div>

        </main>



    )
}