import { useContext, useEffect, useState } from "react";
import { Movie, MoviesContext } from "../../contexts/MoviesContext";
import { Heart } from "phosphor-react";





export function FavoriteButton({ movieId }: { movieId: number }) {

    

    const {setMovieAsFavorite, favoriteMovies} = useContext(MoviesContext)
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const isMovieFavorite = favoriteMovies.some((movie: Movie) => movie.id === movieId);
        setIsFavorite(isMovieFavorite);
      }, [favoriteMovies, movieId]);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); 
        setMovieAsFavorite(movieId);
        setIsFavorite(!isFavorite)
      };
    return (
    <button onClick={handleButtonClick}>
        <Heart weight='regular' color="red"/>
    </button>
    );
}