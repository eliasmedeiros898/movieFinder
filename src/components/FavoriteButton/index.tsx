import { useContext } from "react";
import { MoviesContext } from "../../contexts/MoviesContext";
import { Heart } from "phosphor-react";





export function FavoriteButton({ movieId }: { movieId: number }) {

    const {setMovieAsFavorite} = useContext(MoviesContext)

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); 
        setMovieAsFavorite(movieId);
      };
    return (
    <button onClick={handleButtonClick}>
        <Heart  color="red"/>
    </button>
    );
}