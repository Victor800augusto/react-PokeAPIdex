import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainPokemon from "../components/MainPokemon";
import { StyledHome } from "./styles/Home.style";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <MainPokemon />
      <Footer />
    </StyledHome>
  );
};

export default Home;
