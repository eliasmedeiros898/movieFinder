import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, MoviesContext } from '../../contexts/MoviesContext';




export function MoviePage() {
    const { movieId } = useParams();
    
    const {getMovieById} = useContext(MoviesContext)

    const [movie, setMovie] = useState<Movie | null>( null )

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


    return(
        <div>movie page do filme: {movie?.title}</div>
    )
}