import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter} from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { MoviesProvider } from './contexts/MoviesContext';

export function App() {
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
    </>
    
  )
}


