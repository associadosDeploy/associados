import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root{
    --white: #fff;
    --background: #fff;
    --black: #2A2A29;
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

  body{
    background: #fff;
    color:#343434;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family:'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5,h6, strong {
    font-weight: 400;
  }

  a{
    text-decoration:none;
    color: #2A2A29;
  }

  button{
    cursor: pointer;
  }
`;
