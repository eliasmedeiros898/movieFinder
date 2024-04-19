
import { format } from "date-fns";
import { Heart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Header } from "../../components/Header";
import { Movie, MoviesContext } from "../../contexts/MoviesContext";
import { CustomCarousel, CustomCarouselCaption, CustomHeart, CustomStar, MovieCardWrapper, MovieSection, SectionTitle, Wrapper } from "./styles";



export function Home() {

    const {topMovies, upcomingMovies,popularMovies,fetchPopularMovies, fetchTopRatedMovies,fetchUpcomingMovies} = useContext(MoviesContext)
    const [heartClicked, setHeartClicked] = useState(false);
    
    const handleClick = () => {
        setHeartClicked(!heartClicked);
      };
    
    

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
        
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
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
                                <a key={movie.id} href={`/movie_page/${movie.id}`}>
                                <Card  style={{width:"20rem"}} bg="dark" text="white">
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
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
                            ))}
                                
                        </MovieCardWrapper>
                    }
            </MovieSection>

            <MovieSection>
                <SectionTitle>Em breve:</SectionTitle>
                {<MovieCardWrapper>
                            
                        
                            {upcomingMovies.map(movie => (
                                <a key={movie.id} href={`/movie_page/${movie.id}`}>
                                <Card  style={{width:"20rem"}} bg="dark" text="white">
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                    <Card.Body >
                                        <Card.Title >{movie.title}</Card.Title>
                                        <Card.Title style={{display:"flex", justifyContent:"space-between"}}>

                                            {format(new Date(movie.release_date), 'dd/MM/yyyy')} 
                                            <button>
                                              <CustomHeart size={34} weight={heartClicked ? 'fill' : 'regular'} onClick={handleClick}/>  
                                            </button>
                                            
                                        
                                        </Card.Title>
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