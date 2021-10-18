import React from "react";
// import { useGlobalContext } from "../context";
import ItemPokemon from "./ItemPokemon";

const ListPokemon = () => {
  // const { dataPokemon, isLoading } = useGlobalContext();

  // const fetchPokemon = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getPokemonData = async () => {
  //   const id = dataPokemon[0].pokemon_species.url.split("/")[6];
  //   const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  //   const pokemonItem = await fetchPokemon(url);
  //   console.log(pokemonItem);
  // };

  // if (!isLoading) {
  //   // getPokemonData();

  // }

  return <ItemPokemon />;
};

export default ListPokemon;
