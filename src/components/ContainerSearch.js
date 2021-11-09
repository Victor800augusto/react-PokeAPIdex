import React from "react";
import {
  StyledContainerSearch,
  StyledLabel,
  StyledInput,
} from "./styles/ContainerSearch.style";

const ContainerSearch = () => {
  return (
    <StyledContainerSearch>
      <StyledLabel for="inputSearch">Pokémon name or number</StyledLabel>
      <StyledInput
        type="search"
        name="inputSearch"
        maxLength="20"
      ></StyledInput>
    </StyledContainerSearch>
  );
};

export default ContainerSearch;
