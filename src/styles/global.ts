import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
            outline: 0;
    }

    body {
        background-color: ${(props) => props.theme['gray-800']};
        color: ${(props) => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 2rem Roboto, sans-serif;
    }

`