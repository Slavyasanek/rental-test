import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: Manrope, sans-serif;
      font-weight: 400;
      background-color: ${props => props.theme.mainBcg};
      color: ${props => props.theme.mainText};
      &.close {
        overflow: hidden;
      }
      &::-webkit-scrollbar {
         background-color: ${props => props.theme.mainBcg};
          border-radius: 12px;
          width: 6px;
      }
      &::-webkit-scrollbar-thumb {
           background-color: ${props => props.theme.decorativePurple};
           width: 6px;
          border-radius: 12px;
      }
    }
`