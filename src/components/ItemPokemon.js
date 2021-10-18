import React, { useState, useEffect } from "react";
import {
  StyledItemPokemon,
  ImageContainer,
  ContainerPokemonData,
  IdPokemon,
  ContainerTypePokemon,
  TypePokemon,
} from "./styles/ItemPokemon.style";
import titleCase from "../utils";

const ItemPokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //
  const url = `https://pokeapi.co/api/v2/pokemon/1/`;
  //

  const fetchPokemon = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon(url);
  }, []);

  if (!isLoading) {
    return (
      <StyledItemPokemon>
        <ImageContainer>
          <img src={pokemon.sprites.front_default} alt="" />
        </ImageContainer>
        <ContainerPokemonData>
          <IdPokemon>{pokemon.id}</IdPokemon>
          <h3>{titleCase(pokemon.species.name)}</h3>
          <ContainerTypePokemon>
            {pokemon.types.map((item, index) => {
              console.log(item);
              return (
                <TypePokemon key={index} {...item}>
                  {titleCase(item.type.name)}
                </TypePokemon>
              );
            })}
          </ContainerTypePokemon>
        </ContainerPokemonData>
      </StyledItemPokemon>
    );
  } else {
    return <div>error</div>;
  }
};

export default ItemPokemon;
