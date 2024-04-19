
import { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Header } from "../../components/Header";
import { Movie, MoviesContext } from "../../contexts/MoviesContext";
import { HomeCard } from "./components/HomeCard";
import { CustomCarousel, CustomCarouselCaption, MovieCardWrapper, MovieSection, SectionTitle, Wrapper } from "./styles";



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
                                
                                <HomeCard 
                                    key={movie.id}
                                    title={movie.title}
                                    id={movie.id}
                                    vote_average={movie.vote_average}
                                    poster_path={movie.poster_path}
                                />
                            ))}
                                
                        </MovieCardWrapper>
                    }
            </MovieSection>

            <MovieSection>
                <SectionTitle>Em breve:</SectionTitle>
                {<MovieCardWrapper>
                            
                        
                            {upcomingMovies.map(movie => (
                                <HomeCard 
                                    key={movie.id}
                                    title={movie.title}
                                    id={movie.id}
                                    vote_average={movie.vote_average}
                                    poster_path={movie.poster_path}
                                />
                            ))}
                                
                        </MovieCardWrapper>
                    }
            </MovieSection>
            
        
        

            

            
        </Wrapper>
        
    )
}