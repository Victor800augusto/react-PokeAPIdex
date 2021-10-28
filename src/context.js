import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  let totalPages;
  const quantityPokemon = 21;

  const fetchPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokedex/1");
      const data = await response.json();
      setDataPokemon(data.pokemon_entries);
      totalPages = Math.ceil(data.pokemon_entries.length / 21);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <AppContext.Provider
      value={{
        dataPokemon,
        isLoading,
        totalPages,
        quantityPokemon,
        currentPage,
        setCurrentPage,
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
