import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 18px;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  @font-face {
    font-family: "pokemonFont";
    src: url(../fonts/Pokemon-Solid.ttf);
  }

   {
    font-family: pokemonFont, Arial, Helvetica, sans-serif;
    color: #ffcb05;
    -webkit-text-stroke: 1px #3466af;
    text-shadow: 2px 2px 2px #000000;
  }
`;
