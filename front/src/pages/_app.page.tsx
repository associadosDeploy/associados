// import StyledComponentsRegistry from '@/lib/registry';
// import '../styles/global';
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
// import { globalStyles } from '@/styles/global';

const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}


:root{
  --white: #fff;
  --background: #fff;
  --black: #222;
  --light-black: #343433;
  --yellow: #FFCF23;
  --dark-yellow: #A78B3D;
}

@media(max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  background: #fff;
  color: #343433;
}

body, button, input, textarea{
  font: 400 1rem 'Roboto', sans-serif
}

button{
  cursor: pointer;
  transition: opacity 0.5s;
  outline: none;
}

a{
  color: inherit;
  text-decoration: none;
  transition: opacity 0.5s;
}
`;
export default function MyApp({ Component, pageProps }: AppProps) {
  return  <>
  <GlobalStyles/>
  <Component {...pageProps} />
  </>
}