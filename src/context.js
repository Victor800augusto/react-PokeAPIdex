import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [dataPokemonOrder, setDataPokemonOrder] = useState([]);
  const [orderType, setOrderType] = useState("numberAsc");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const quantityPokemon = 21;

  const fetchPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokedex/1");
      const data = await response.json();
      setDataPokemon(data.pokemon_entries);
      setDataPokemonOrder(data.pokemon_entries);
      setTotalPages(Math.ceil(data.pokemon_entries.length / 21));
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const sortName = (array) => {
    array.sort((a, b) =>
      a.pokemon_species.name.localeCompare(b.pokemon_species.name)
    );
    return array;
  };

  const sortId = (array) => {
    array.sort((a, b) => {
      return a.entry_number - b.entry_number;
    });
    return array;
  };

  const handleChange = (selectedOption) => {
    if (selectedOption.value === "numberAsc") {
      let data = [...dataPokemonOrder];
      setDataPokemonOrder(sortId(data));
      setOrderType("numberAsc");
      setCurrentPage(1);
    }
    if (selectedOption.value === "numberDes") {
      let data = [...dataPokemonOrder];
      setDataPokemonOrder(sortId(data).reverse());
      setOrderType("numberDes");
      setCurrentPage(1);
    }
    if (selectedOption.value === "alphabetAZ") {
      let data = [...dataPokemonOrder];
      setDataPokemonOrder(sortName(data));
      setOrderType("alphabetAZ");
      setCurrentPage(1);
    }
    if (selectedOption.value === "alphabetZA") {
      let data = [...dataPokemonOrder];
      setDataPokemonOrder(sortName(data).reverse());
      setOrderType("alphabetZA");
      setCurrentPage(1);
    }
  };

  const handleSearch = (searchArray) => {
    if (orderType === "numberAsc") {
      setDataPokemonOrder(sortId(searchArray));
    }
    if (orderType === "numberDes") {
      setDataPokemonOrder(sortId(searchArray).reverse());
    }
    if (orderType === "alphabetAZ") {
      setDataPokemonOrder(sortName(searchArray));
    }
    if (orderType === "alphabetZA") {
      setDataPokemonOrder(sortName(searchArray).reverse());
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <AppContext.Provider
      value={{
        dataPokemon,
        dataPokemonOrder,
        setDataPokemonOrder,
        isLoading,
        totalPages,
        setTotalPages,
        quantityPokemon,
        currentPage,
        setCurrentPage,
        setOrderType,
        handleChange,
        handleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
