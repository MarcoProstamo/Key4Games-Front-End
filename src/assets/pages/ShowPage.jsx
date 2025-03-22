import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/Game";

export default function ShowPage() {
  const { id } = useParams();
  const [genre, setGenre] = useState(null);
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/games/${id}`)
      .then((response) => response.json())
      .then((data) => setGame(data))
      .catch((error) => console.error("Error fetching game:", error));

    fetch(`http://localhost:8000/api/genres/${id}`)
      .then((response) => response.json())
      .then((data) => setGenre(data))
      .catch((error) => console.error("Error fetching genre:", error));
  }, []);

  return (
    <>
      <div className="container spacing-from-nav mb-5 text-light">
        {game && genre && (
          <ul>
            <li>{game.title}</li>
            <li>{game.publisher}</li>
            <li>{game.developer}</li>
            <li>{genre.name}</li>
            <li>{game.description}</li>
            <li>Immagine</li>
          </ul>
        )}
      </div>
    </>
  );
}
