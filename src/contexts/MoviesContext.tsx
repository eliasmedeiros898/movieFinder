import { ReactNode, createContext, useState } from "react";
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

  interface Collection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
  interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  export interface MovieDetais {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }


interface MoviesContextType {
    topMovies: Movie[]
    upcomingMovies: Movie[]
    popularMovies: Movie[]
    favoriteMovies: Movie[]
    guestSessionId: string
    searchedMovies: Movie[]
    fetchTopRatedMovies: () => Promise<void>
    fetchUpcomingMovies: () => Promise<void>
    fetchPopularMovies: () => Promise<void>
    fetchFavoritesMovies: () => Promise<void>
    createGuestSession: () => Promise<void>
    getMovieById: (id:string) => Promise<MovieDetais>
    setMovieAsFavorite: (id:number) => Promise<void>
    searchMovies: (query:string, page?: number) => Promise<void>
    //getSearchedMovieObject: (query:string) => Promise<SearchMovieType>
    
  }


export interface SearchMovieType{
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}


interface MoviesProviderProps {
    children: ReactNode
}
  


export const MoviesContext = createContext({} as MoviesContextType)

    export function MoviesProvider({ children }: MoviesProviderProps) {
        const [topMovies, setTopMovies] = useState<Movie[]>([])
        const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([])
        const [popularMovies, setPopularMovies] = useState<Movie[]>([])
        const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])
        const [guestSessionId, setGuestSessionId] = useState<string>('')
        const [searchedMovies, setSearchedMovies] = useState<Movie[]>([])
        //const [searchedMoviesObject, setSearchedMoviesObject] = useState<SearchMovieType>()
      
      async function fetchTopRatedMovies() {
          const response = await api.get(`/movie/top_rated?language=pt-bR?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
          setTopMovies(response.data.results)
          
      }
      async function fetchUpcomingMovies() {
        const response = await api.get(`/movie/upcoming?language=pt-bR?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        setUpcomingMovies(response.data.results)
        
      }
      async function fetchPopularMovies() {
        const response = await api.get(`/movie/popular?language=pt-bR?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        setPopularMovies(response.data.results)
        
      }
      
      async function fetchFavoritesMovies() {
        const response = await api.get(`/account/${import.meta.env.VITE_TMDB_ACCOUNT_ID}/favorite/movies?language=pt-bR`)
        setFavoriteMovies(response.data.results)
        return response.data
      }

      async function createGuestSession() {
          const response = await api.get(`/authentication/guest_session/new`)
          setGuestSessionId(response.data.guest_session_id)
      }

      async function getMovieById(id:string) {
        const response = await api.get(`/movie/${id}?language=pt-bR`)
        return response.data
      }

      async function searchMovies(query:string, page?: number){
        const response = await api.get(`/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}&page=${page}`)
        setSearchedMovies(response.data.results)
        
      }


      async function setMovieAsFavorite(id: number) {
        try {
          const apiKey = import.meta.env.VITE_TMDB_API_KEY;
          const accountId = import.meta.env.VITE_TMDB_ACCOUNT_ID;
          const response = await api.post(`https://api.themoviedb.org/3/account/${accountId}/favorite`,
            {media_type: 'movie', media_id: id, favorite: true}, {params: {apiKey: apiKey}}
          )

          return response.data
      } catch (error) {
        console.error('Erro ao favoritar o filme:', error);
        throw error;
      }
    }

      // async function getSearchedMovieObject(query:string){
      //   const response = await api.get(`/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`)
      //   setSearchedMoviesObject(response.data)
      //   return searchedMoviesObject
      // }

   

  
    
    
    
    return (
      <MoviesContext.Provider
        value={{
          topMovies,
          upcomingMovies,
          guestSessionId,
          popularMovies,
          favoriteMovies,
          searchedMovies,
          fetchTopRatedMovies,
          fetchUpcomingMovies,
          fetchPopularMovies,
          fetchFavoritesMovies,
          setMovieAsFavorite,
          createGuestSession,
          getMovieById,
          searchMovies,
          
          
        }}
      >
        {children}
      </MoviesContext.Provider>
    )
  }
