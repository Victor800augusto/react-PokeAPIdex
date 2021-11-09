import React from "react";
import { StyledMain, ContainerTools } from "./styles/MainPokemon.style";
import ContainerPokemon from "./ContainerPokemon";
import ContainerSearch from "./ContainerSearch";
import { useGlobalContext } from "../context";

import Pagination from "../Pagination";
import OrderSelect from "../components/OrderSelect";

let PageSize = 21;

const MainPokemon = () => {
  const { dataPokemonOrder, currentPage, setCurrentPage } = useGlobalContext();

  return (
    <StyledMain>
      <ContainerTools>
        <ContainerSearch />
        <OrderSelect />
      </ContainerTools>

      <ContainerPokemon />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={dataPokemonOrder.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </StyledMain>
  );
};

export default MainPokemon;
