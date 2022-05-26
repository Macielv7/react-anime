
import { Link } from "react-router-dom"




export default function index() {
    return(
        <main>
            <h1>PROJETO</h1>
            <ul>
                <li>  <Link to='/Corprimaria'> corprimaria </Link>  </li>
                <li>  <Link to='/MaiorNumero'> MaiorNumero </Link>  </li>
                <li>  <Link to='/ingressoCinema'> ingressoCinema </Link>  </li>
            </ul>
        </main>
    )
}