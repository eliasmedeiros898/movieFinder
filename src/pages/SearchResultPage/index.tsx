import { useContext } from "react"
import { Movie, MoviesContext } from "../../contexts/MoviesContext"
import { Header } from "../../components/Header"


export function SearchResultPage() {

    const {searchedMovies} = useContext(MoviesContext)
    console.log(searchedMovies)

    return(
        <div>
            <Header/>
            {searchedMovies.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </div>
    )
}