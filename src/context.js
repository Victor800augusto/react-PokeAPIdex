import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [dataPokemonOrder, setDataPokemonOrder] = useState([]);
  const [orderType, setOrderType] = useState("numberAsc");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // let totalPages;
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

  const handleChange = (selectedOption) => {
    if (selectedOption.value === "numberAsc") {
      setDataPokemonOrder(dataPokemon);
      setCurrentPage(1);
    }
    if (selectedOption.value === "numberDec") {
      let data = [...dataPokemon];
      setDataPokemonOrder(data.reverse());
      setCurrentPage(1);
    }
    if (selectedOption.value === "alphabetAZ") {
      let data = [...dataPokemon];
      // sortName(data);
      setDataPokemonOrder(sortName(data));
      setCurrentPage(1);
    }
    if (selectedOption.value === "alphabetZA") {
      let data = [...dataPokemon];
      setDataPokemonOrder(sortName(data).reverse());
      setCurrentPage(1);
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
