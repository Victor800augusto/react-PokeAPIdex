import React from "react";
import { useGlobalContext } from "../context";
import ItemPokemon from "./ItemPokemon";

const ListPokemon = () => {
  const { dataPokemonOrder, isLoading, quantityPokemon, currentPage } =
    useGlobalContext();

  switch (isLoading) {
    case true:
      return <div>true</div>;
    case false:
      let arrayPokemon = [];
      for (let i = 0; i < quantityPokemon; i++) {
        if (dataPokemonOrder[i + (currentPage - 1) * 21] !== undefined) {
          arrayPokemon.push(dataPokemonOrder[i + (currentPage - 1) * 21]);
        }
      }

      return arrayPokemon.map((pokemon) => {
        const id = pokemon.entry_number;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        return <ItemPokemon key={id} url={url} />;
      });

    default:
      return <div>fail</div>;
  }
};

export default ListPokemon;
