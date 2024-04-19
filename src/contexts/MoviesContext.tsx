import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Movie {
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
    topMovies: Movie[]
    upcomingMovies: Movie[]
    popularMovies: Movie[]
    guestSessionId: string
    fetchTopRatedMovies: () => Promise<void>
    fetchUpcomingMovies: () => Promise<void>
    fetchPopularMovies: () => Promise<void>
    createGuestSession: () => Promise<void>
    getMovieById: (id:string) => Promise<Movie>
    
  }


interface MoviesProviderProps {
    children: ReactNode
}
  


export const MoviesContext = createContext({} as MoviesContextType)

export function MoviesProvider({ children }: MoviesProviderProps) {
    const [topMovies, setTopMovies] = useState<Movie[]>([])
    const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([])
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [guestSessionId, setGuestSessionId] = useState<string>('')

  
    async function fetchTopRatedMovies() {
        const response = await api.get(`/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        setTopMovies(response.data.results)
        
    }
    async function fetchUpcomingMovies() {
      const response = await api.get(`/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      setUpcomingMovies(response.data.results)
      
    }
    async function fetchPopularMovies() {
      const response = await api.get(`/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      setPopularMovies(response.data.results)
      
    }
    

    async function createGuestSession() {
       const response = await api.get(`/authentication/guest_session/new`)
       setGuestSessionId(response.data.guest_session_id)
    }

    async function getMovieById(id:string) {
      const response = await api.get(`/movie/${id}`)
      return response.data
   }

  
    
    
    
    return (
      <MoviesContext.Provider
        value={{
          topMovies,
          upcomingMovies,
          guestSessionId,
          popularMovies,
          fetchTopRatedMovies,
          fetchUpcomingMovies,
          fetchPopularMovies,
          createGuestSession,
          getMovieById
        }}
      >
        {children}
      </MoviesContext.Provider>
    )
  }
  