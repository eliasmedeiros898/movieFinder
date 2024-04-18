
import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Header } from "../../components/Header";
import { MoviesContext } from "../../contexts/MoviesContext";
import { CustomCarousel, CustomCarouselCaption, Wrapper } from "./styles";


export function Home() {

    const topMovies = useContext(MoviesContext)
    
    return(
        <Wrapper>
            <Header />
            
                {/* {topMovies.movies.map(movie => (
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} style={{height:"30rem"}}/>
                        <Card.Body>
                            <Card.Title style={{fontWeight:"bolder", fontSize:"40px", padding:"1rem"}}>{movie.title}</Card.Title>
                            <Card.Text >
                                Nota: {movie.vote_average}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                  </Card>
                )
                    
                )} */}
                
            <CustomCarousel >
                
                {topMovies.movies.map(movie => (
                    
                    <Carousel.Item>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                        <CustomCarouselCaption>
                            <h2>{movie.title}</h2>
                            <p>Nota: {movie.vote_average.toFixed(1)}</p>
                        </CustomCarouselCaption>
                    </Carousel.Item>
                ))}
            </CustomCarousel>
            
        </Wrapper>
        
    )
}