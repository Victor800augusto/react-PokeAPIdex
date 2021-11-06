import React from "react";
import { StyledMain } from "./styles/MainPokemon.style";
import ContainerPokemon from "./ContainerPokemon";
import { useGlobalContext } from "../context";

import Pagination from "../Pagination";
import OrderSelect from "../components/OrderSelect";

let PageSize = 21;

const MainPokemon = () => {
  const { dataPokemonOrder, currentPage, setCurrentPage } = useGlobalContext();

  return (
    <StyledMain>
      <OrderSelect />
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
