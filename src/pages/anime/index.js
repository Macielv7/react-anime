import axios from "axios"
import { useState } from "react";
import './index.css'


export default function Index() {

    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState ('');

    async function verficarCorPrimaria(){
       const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);
       if(resp.data.primaria == true){
           setResposta('SIM');
       }
       else{
           setResposta('NAO');
       }

    }

    

    return(
        <main className="tudo">
            <h1>COR PRIMARIA</h1>

            <div> 
                cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
                 </div>

                 <div>
                     <button  onClick={verficarCorPrimaria}>verificar</button>

                 </div>
                 e cor primaria? {resposta}
                 
                 <div>
                     
                 </div>
        </main>
    )
}