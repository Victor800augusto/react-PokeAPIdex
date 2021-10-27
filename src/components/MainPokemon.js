import React, { useState } from "react";
import { StyledMain } from "./styles/MainPokemon.style";
import ContainerPokemon from "./ContainerPokemon";
import { useGlobalContext } from "../context";

import Pagination from "../Pagination";

let PageSize = 21;

const MainPokemon = () => {
  const { dataPokemon } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <StyledMain>
      <ContainerPokemon />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={dataPokemon.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </StyledMain>
  );
};

export default MainPokemon;
