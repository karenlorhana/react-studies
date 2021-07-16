import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        align-items: center;
        align-content: center;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html{
        font-size: 18px;
    }

    html, body, #__next{
        height: 100%
    }

    body{
        font-weight: 10;
        
    }
`

export default GlobalStyles
