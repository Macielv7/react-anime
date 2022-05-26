import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/home'
import Corprimaria from './pages/CorPrimaria'
import MaiorNumero from './pages/MaiorNumero'
import IngressoCinema from './pages/ingressoCinema'

export default function siteRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/Corprimaria' element={<Corprimaria  />} />
            <Route path='/MaiorNumero' element={<MaiorNumero  />} />
            <Route path='/IngressoCinema' element={<IngressoCinema  />} />
        </Routes>
        </BrowserRouter>
    )
}