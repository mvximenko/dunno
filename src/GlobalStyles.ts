import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #161616;
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  svg { 
    display: block; 
  }
`;

export interface FadeEffectTypes {
  fade: boolean;
}

export const fadeEffect = css<FadeEffectTypes>`
  ${({ fade }) =>
    fade
      ? `
    animation: fadein 0.5s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `
      : `
      visibility: hidden;
    `}
`;
