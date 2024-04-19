import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MoviePage } from "./pages/MoviePage";




export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/movie_page/:movieId" element={<MoviePage/>} />
        </Routes>

        
    )
}


