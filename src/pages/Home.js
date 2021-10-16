import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionPokemon from "../components/SectionPokemon";
import { StyledHome } from "./styles/Home.style";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <SectionPokemon />
      <Footer />
    </StyledHome>
  );
};

export default Home;
