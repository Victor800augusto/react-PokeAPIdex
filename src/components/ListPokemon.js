import React from "react";
import { useGlobalContext } from "../context";
import ItemPokemon from "./ItemPokemon";
import { DataLoading } from "./styles/ListPokemon.style";

const ListPokemon = () => {
  const { dataPokemonOrder, isLoading, quantityPokemon, currentPage } =
    useGlobalContext();

  switch (isLoading) {
    case true:
      return <DataLoading>Loading...</DataLoading>;
    case false:
      let arrayPokemon = [];
      for (let i = 0; i < quantityPokemon; i++) {
        if (dataPokemonOrder[i + (currentPage - 1) * 21] !== undefined) {
          arrayPokemon.push(dataPokemonOrder[i + (currentPage - 1) * 21]);
        }
      }
      if (arrayPokemon.length === 0) {
        return (
          <div>
            <h3 style={{ color: "#a1291b", fontWeight: "bold" }}>
              No Pokémon matched your search!
            </h3>
            <p style={{ fontWeight: "bold" }}>
              Make sure you typed the correct name or number of the Pokémon!
            </p>
          </div>
        );
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
