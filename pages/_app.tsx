import { AppProps } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import ShoppingCartProvder from "../contexts/ShoppingCartContext"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  :root {
    font-size: 16px;
  }
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`
const theme = {
  colors:{
    primary: "#f73f01",
    secondary: "#777"
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ShoppingCartProvder>
          <Component {...pageProps} />
        </ShoppingCartProvder>
      </ThemeProvider>
    </>
  )
}

export default MyApp
