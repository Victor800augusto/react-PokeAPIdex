import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokedex/1");
      const data = await response.json();
      setDataPokemon(data.pokemon_entries);
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
    <AppContext.Provider value={{ dataPokemon, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
