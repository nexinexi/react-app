import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  *, *::before, *::after {
    box-sizing: border-box
  }
  
  html, body {
    font-family: 'Khula', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;
