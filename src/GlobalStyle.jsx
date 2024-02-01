import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {

    font-size:18px;
  }

  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
`;