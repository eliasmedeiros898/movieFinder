import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetais, MoviesContext } from '../../contexts/MoviesContext';
import { AverageVote, Content, MovieDetails, Overview, Poster, ReleaseDate } from '../MoviePage/styles';
import { format } from "date-fns";
import { Header } from '../../components/Header';


export function MoviePage() {
    const { movieId } = useParams();
    
    const {getMovieById} = useContext(MoviesContext)

    const [movie, setMovie] = useState<MovieDetais | null>( null )

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                if (movieId) {
                    
                    const movie = await getMovieById(movieId);
                    setMovie(movie); 
                }
            } catch (error) {
                console.error('Erro ao buscar filme:', error);
            }
        };

        fetchMovie(); 
    }, [movieId, getMovieById]);

    

    return (
        <>
        <Header/>
        <MovieDetails className="movie-details">
          {movie ? (
            
            <>
                <Poster src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                
                <Content>
                <Overview>
                    <h1>{movie.title}</h1>
                    
                    <p>{movie.overview}</p>
                    <ReleaseDate>
                        <h2>Lançamento</h2>
                        <p>{format(new Date(movie.release_date), 'dd/MM/yyyy')}</p>
                    </ReleaseDate>
                    <AverageVote property={movie.vote_average.toFixed(1)}>
                        <h2>Average Vote</h2>
                        <p property={movie.vote_average.toFixed(1)}>{movie.vote_average.toFixed(1)}</p>
                    </AverageVote>


                </Overview>
                </Content>
            </>  
            
          ) : (
            <div>Carregando...</div>
          )}
        </MovieDetails>
        
        </>
      );
    };

