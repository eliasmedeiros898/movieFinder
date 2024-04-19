import { useContext, useEffect } from "react"
import { MoviesContext } from "../../contexts/MoviesContext"
import { Card } from "react-bootstrap"
import { CustomStar } from "../Home/styles"
import { Heart } from "phosphor-react"
import { Header } from "../../components/Header"
import { HomeCard } from "../Home/components/HomeCard"
import { FavoritesContent } from "../FavoritesPage/styles"


export function FavoritesPage(){

    const {fetchFavoritesMovies, favoriteMovies} = useContext(MoviesContext)

    useEffect(() => {
        fetchFavoritesMovies()
    }, [])


    return(
        <>
            <Header />

            <FavoritesContent >
                {favoriteMovies.map(movie => (
                    <HomeCard 
                    key={movie.id}
                    title={movie.title}
                    id={movie.id}
                    vote_average={movie.vote_average}
                    poster_path={movie.poster_path}
                    
                    />
                ))}


                
            </FavoritesContent>
            

        </>
    )
}