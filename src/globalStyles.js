import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: pokemonFont;
        src: url(./fonts/Pokemon\ Solid.ttf);
    }

    body {
        background: #e73221;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyles;
