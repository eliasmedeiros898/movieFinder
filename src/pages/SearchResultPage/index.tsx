import { Heart } from "phosphor-react"
import { useContext } from "react"
import { Card } from "react-bootstrap"
import { Header } from "../../components/Header"
import { MoviesContext } from "../../contexts/MoviesContext"
import { CustomStar } from "../Home/styles"
import { AlertDiv, ResultDiv } from "./styles"
import { HomeCard } from "../Home/components/HomeCard"


export function SearchResultPage() {

    const {searchedMovies} = useContext(MoviesContext)
    

    return(
        <div>
            <Header/>
            <ResultDiv>

            
            {searchedMovies.length === 0 ? (
                <AlertDiv  variant='secondary'>
                Nenhum filme encontrado
              </AlertDiv>
                ) : (
                searchedMovies.map(movie => (
                    <HomeCard 
                                    key={movie.id}
                                    title={movie.title}
                                    id={movie.id}
                                    vote_average={movie.vote_average}
                                    poster_path={movie.poster_path}
                                />

                 ))
            )}
            </ResultDiv>
        </div>
    )
}