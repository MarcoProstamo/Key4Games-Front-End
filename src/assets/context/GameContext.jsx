import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GlobalGameProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return <GameContext.Provider value={games}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);
