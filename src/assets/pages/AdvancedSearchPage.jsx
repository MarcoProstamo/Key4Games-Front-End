import { useEffect, useState } from "react";
import { useGameContext } from "../context/GameContext";
import Game from "../components/Game";

export default function AdvancedSearchPage() {
  const games = useGameContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const [genres, setGenres] = useState(null);

  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "" || game.genre_id == selectedGenre)
  );

  useEffect(() => {
    fetch("http://localhost:8000/api/genres")
      .then((response) => response.json())
      .then((data) => setGenres(data))
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return (
    <div className="container spacing-from-nav mb-5">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca un gioco..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Tutti i generi</option>
          {genres &&
            genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
        </select>
      </div>

      {/* Lista giochi */}
      <div className="row row-cols-3 g-5">
        {filteredGames.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}
