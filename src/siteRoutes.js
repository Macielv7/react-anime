import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/home'
import Anime from './pages/anime'


export default function siteRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/Anime' element={<Anime  />} />
        </Routes>
        </BrowserRouter>
    )
}