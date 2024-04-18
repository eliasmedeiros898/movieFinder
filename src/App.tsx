import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter} from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { MoviesProvider } from './contexts/MoviesContext';




export function App() {

  // const [topRatedMovies, setTopRatedMovies] = useState<TopRatedMovieType[]>([])
    
  // useEffect(() => {
    
  //    const  getMovies = async () => {
  //     const response = await api.get(`/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
  //     setTopRatedMovies(response.data.results)
  //   }

  //   getMovies()
  //   }, [])

    
    
    // api.post(`movie/${278}/rating`,{
    //   value: 8.5
    // })



    
    
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <MoviesProvider>
            <Router />
          </MoviesProvider>
        </BrowserRouter>
      </ThemeProvider>
      
      
      {/* {topRatedMovies.length>0 && topRatedMovies.map(movie => (
        <div key={movie.id}>
          <div >{movie.title}</div>
          <img src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'></img>
        </div>
        
        
      )
      )} */}

     
      
    </>
    
  )
}


