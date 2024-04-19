import { Heart } from "phosphor-react"
import { useContext } from "react"
import { Card } from "react-bootstrap"
import { Header } from "../../components/Header"
import { MoviesContext } from "../../contexts/MoviesContext"
import { CustomStar } from "../Home/styles"
import { AlertDiv, ResultDiv } from "./styles"


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
                    <a href={`/movie_page/${movie.id}`}>
                    <Card key={movie.id} style={{width:"20rem", height:"fit-content"}} bg="dark" text="white">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                        <Card.Body >
                            <Card.Title >{movie.title}</Card.Title>
                            <Card.Text style={{display:"flex", gap:"1rem", alignItems:"center", justifyContent:"space-between"}}>
                                <div>
                                    <CustomStar /> {movie.vote_average.toFixed(1)}
                                </div>
                                <Heart/>
                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </a>
                 ))
            )}
            </ResultDiv>
        </div>
    )
}