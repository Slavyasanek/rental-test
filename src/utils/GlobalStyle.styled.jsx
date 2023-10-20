import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: Manrope, sans-serif;
      font-weight: 400;
      background-color: ${props => props.theme.mainBcg};
      color: ${props => props.theme.mainText};
      &.close {
        overflow: hidden;
      }
    }
`