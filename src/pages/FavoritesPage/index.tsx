import { useContext, useEffect } from "react"
import { Header } from "../../components/Header"
import { MoviesContext } from "../../contexts/MoviesContext"
import { FavoritesContent } from "../FavoritesPage/styles"
import { HomeCard } from "../Home/components/HomeCard"



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