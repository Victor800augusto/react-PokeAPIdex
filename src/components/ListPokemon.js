import React from "react";
import { useGlobalContext } from "../context";
import ItemPokemon from "./ItemPokemon";

const ListPokemon = () => {
  const { dataPokemon, isLoading, quantityPokemon } = useGlobalContext();

  // if (!isLoading) {
  //   dataPokemon.map((pokemon) => {
  //     const id = pokemon.entry_number;
  //     const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  //     console.log(id, url);
  //     return <ItemPokemon key={id} url={url} />;
  //   });
  // }

  switch (isLoading) {
    case true:
      return <div>true</div>;
    case false:
      let arrayPokemon = [];
      // console.log(quantityPokemon, dataPokemon[0]);
      for (let i = 0; i < quantityPokemon; i++) {
        // console.log(dataPokemon[i]);
        arrayPokemon.push(dataPokemon[i]);
      }
      console.log(arrayPokemon);

      return arrayPokemon.map((pokemon) => {
        const id = pokemon.entry_number;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        return <ItemPokemon key={id} url={url} />;
      });

    // return <ItemPokemon url="https://pokeapi.co/api/v2/pokemon/1/" />;
    default:
      return <div>fail</div>;
  }

  // const url = `https://pokeapi.co/api/v2/pokemon/1/`;

  // return <ItemPokemon url="https://pokeapi.co/api/v2/pokemon/1/" />;
};

export default ListPokemon;
