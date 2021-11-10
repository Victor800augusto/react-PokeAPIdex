import { createGlobalStyle } from "styled-components";

import pokemonFont from "./fonts/Pokemon-Solid.ttf";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        text-align:center;
        background: #e73221;
        font-family: Arial, Helvetica, sans-serif;
        line-height:1.5;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4 {
        letter-spacing: initial;
        line-height: 1.25;
    }
    h1 {
        font-size: 3.75rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.75rem;
        font-weight: normal;
    }
    h4 {
        font-size: 1rem;
    }
`;

export default GlobalStyles;
