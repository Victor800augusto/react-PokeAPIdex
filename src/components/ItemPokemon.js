import React, { useState, useEffect } from "react";
import {
  StyledItemPokemon,
  ImageContainer,
  ContainerPokemonData,
  IdPokemon,
  ContainerTypePokemon,
  TypePokemon,
  LoadingImageContainer,
  LoadingContainerPokemonData,
  LoadingIdPokemon,
  LoadingNamePokemon,
  LoadingContainerTypePokemon,
} from "./styles/ItemPokemon.style";
import titleCase from "../utils";

const ItemPokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
  }, [url]);

  if (!isLoading) {
    return (
      <StyledItemPokemon>
        <ImageContainer>
          <img src={pokemon.sprites.front_default} alt="" />
        </ImageContainer>
        <ContainerPokemonData props={pokemon.types}>
          <IdPokemon>{pokemon.id}</IdPokemon>
          <h3>{titleCase(pokemon.species.name)}</h3>
          <ContainerTypePokemon>
            {pokemon.types.map((item, index) => {
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
    return (
      <StyledItemPokemon>
        <LoadingImageContainer />
        <LoadingContainerPokemonData>
          <LoadingIdPokemon />
          <LoadingNamePokemon />
          <LoadingContainerTypePokemon />
        </LoadingContainerPokemonData>
      </StyledItemPokemon>
    );
  }
};

export default ItemPokemon;
