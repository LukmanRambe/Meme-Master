import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #a626d3;
    --white: #ffffff;
    --black : #2c2c2c;
    --grey: #0d0d0d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Karla', sans-serif;
  }
`

export default GlobalStyle
