import React from "react";
import {
  StyledContainerSearch,
  StyledLabel,
  StyledInput,
} from "./styles/ContainerSearch.style";
import { useGlobalContext } from "../context";

const ContainerSearch = () => {
  let debounceTimeout;
  const { setDataPokemonOrder, dataPokemon } = useGlobalContext();

  const handleKey = (e) => {
    const format = /[0-9A-z-]/g;
    if (!format.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      let data = [...dataPokemon];
      if (isNaN(Number(e.target.value)) && e.target.value.length >= 3) {
        let searchArray = [];
        let i = 0;
        for (i = 0; i < data.length; i++) {
          if (
            data[i].pokemon_species.name.includes(
              `${e.target.value.toLowerCase()}`
            )
          ) {
            searchArray.push(data[i]);
          }
        }
        setDataPokemonOrder(searchArray);
      } else if (
        !isNaN(Number(e.target.value)) &&
        e.target.value.length !== 0
      ) {
        let searchArray = [];
        let i = 0;
        for (i = 0; i < data.length; i++) {
          if (data[i].entry_number.toString().includes(`${e.target.value}`)) {
            searchArray.push(data[i]);
          }
        }
        setDataPokemonOrder(searchArray);
      } else if (
        e.target.value.length === 0 ||
        (e.target.value.length < 3 && isNaN(e.target.value))
      ) {
        setDataPokemonOrder(data);
      }
    }, 700);
  };

  return (
    <StyledContainerSearch>
      <StyledLabel>Pokémon name or number</StyledLabel>
      <StyledInput
        type="search"
        name="inputSearch"
        maxLength="20"
        onKeyPress={handleKey}
        onChange={handleChange}
      ></StyledInput>
    </StyledContainerSearch>
  );
};

export default ContainerSearch;
