
import { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Header } from "../../components/Header";
import { MoviesContext } from "../../contexts/MoviesContext";
import { CustomCarousel, CustomCarouselCaption, MovieCardWrapper, MovieSection, SectionTitle, Wrapper } from "./styles";
import { Link } from "react-router-dom";
import {Movie} from '../../contexts/MoviesContext'



export function Home() {

    const {topMovies, upcomingMovies,popularMovies,fetchPopularMovies, fetchTopRatedMovies,fetchUpcomingMovies} = useContext(MoviesContext)
    
    

    useEffect(() => {
        fetchTopRatedMovies()
        fetchUpcomingMovies()
        fetchPopularMovies()
    }, [])

    
    return(
        <Wrapper>
            <Header />


                
                
            <CustomCarousel >
                
                {popularMovies.map((movie:Movie) => (
                
                    <Carousel.Item key={movie.id}>
                        <a href={`/movie_page/${movie.id}`}>
        
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                        <CustomCarouselCaption>
                            <h2>{movie.title}</h2>
                            <p>Nota: {movie.vote_average.toFixed(1)}</p>
                        </CustomCarouselCaption>
                        </a>
                    </Carousel.Item> 
                
                ))}
            </CustomCarousel>
            
            
            <MovieSection>
                <SectionTitle>Melhores avaliações:</SectionTitle>
                {<MovieCardWrapper>
                            
                        
                            {topMovies.map(movie => (
                            <a href={`/movie_page/${movie.id}`}>
                                <Card key={movie.id} border="danger" style={{width:"25rem"}} bg="dark" text="white">
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                                    <Card.Body style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Title>{movie.vote_average.toFixed(1)}</Card.Title>
                                
                                    </Card.Body>
                            </Card>
                            </a>        
                            ))}
                                
                        </MovieCardWrapper>
                    }
            </MovieSection>

            <MovieSection>
                <SectionTitle>Em breve:</SectionTitle>
                {<MovieCardWrapper>
                            
                        
                            {upcomingMovies.map(movie => (
                                <a href={`/movie_page/${movie.id}`}>
                                <Card key={movie.id} border="danger" style={{width:"25rem"}} bg="dark" text="white">
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                                    <Card.Body >
                                        <Card.Title >{movie.title}</Card.Title>
                                        <Card.Title>{movie.vote_average.toFixed(1)}</Card.Title>
                                
                                    </Card.Body>
                                </Card>
                                </a>
                            ))}
                                
                        </MovieCardWrapper>
                    }
            </MovieSection>
            
        
        



            
        </Wrapper>
        
    )
}