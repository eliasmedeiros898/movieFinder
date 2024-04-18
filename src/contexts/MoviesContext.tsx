import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Movie {
    adult: boolean;
    backdrop_path: string | null ;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }


interface MoviesContextType {
    movies: Movie[]
    fetchTopRatedMovies: () => Promise<void>
    
  }


interface MoviesProviderProps {
    children: ReactNode
}
  


export const MoviesContext = createContext({} as MoviesContextType)

export function MoviesProvider({ children }: MoviesProviderProps) {
    const [movies, setMovies] = useState<Movie[]>([])
  
    async function fetchTopRatedMovies() {
        const response = await api.get(`/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        setMovies(response.data.results)
        
    }
  
    
  
    useEffect(() => {
        fetchTopRatedMovies()
    }, [])
    
    console.log(movies)
    return (
      <MoviesContext.Provider
        value={{
          movies,
          fetchTopRatedMovies,
        }}
      >
        {children}
      </MoviesContext.Provider>
    )
  }
  