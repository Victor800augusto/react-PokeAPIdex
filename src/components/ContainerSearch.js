import React from "react";
import {
  StyledContainerSearch,
  StyledLabel,
  StyledInput,
} from "./styles/ContainerSearch.style";
import { useGlobalContext } from "../context";

const ContainerSearch = () => {
  let debounceTimeout;
  const {dataPokemonOrder,setDataPokemonOrder} = useGlobalContext();
 

  const handleKey = (e) =>{
    const format = /[0-9A-z-]/g;
  if (!format.test(e.key)) {
    e.preventDefault();
  }
  }

  const handleChange = (e) =>{
    let data = [...dataPokemonOrder];
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
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
        console.log(dataPokemonOrder);
        if (searchArray.length == 0) {
          // noResults.style.display = "block";
        } else {
          // noResults.style.display = "none";
        }
        searchGetArray(searchArray);
      }
      else if (!isNaN(Number(e.target.value)) && e.target.value.length != 0) {
        let searchArray = [];
        let i = 0;
      for (i = 0; i < data.length; i++) {
        if (
          data[i].entry_number.toString().includes(`${e.target.value}`)
        ) {
          searchArray.push(data[i]);
        }
      }
      if (searchArray.length == 0) {
        // noResults.style.display = "block";
      } else {
        // noResults.style.display = "none";
      }
      searchGetArray(searchArray);
    }else if (
      e.target.value.length == 0 ||
      (e.value.length < 3 && isNaN(e.value))
    ) {
      console.log("< 3");
      // noResults.style.display = "none";
      // isSearch = false;
      // standardGetArray();
      searchGetArray(data)
    }



    }, 700);
  }

  function searchGetArray(searchArray) {
  // isSearch = true;
  let totalPages = Math.ceil(searchArray.length / 21);
  console.log(totalPages);
  setDataPokemonOrder(searchArray)
  // containerPagination.innerHTML = createPagination(totalPages, page);
  // let sortOrder = document.querySelector(".custom-select-options .selected")
  //   .dataset.value;
  // getArrayPokemon(1, searchArray, sortOrder);
}


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
