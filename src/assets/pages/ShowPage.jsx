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
        <div className="row justify-content-center flex-nowrap">
          {game && genre && <Game game={game} />}
          {game && genre && (
            <div className="w-25 d-flex flex-column justify-content-between">
              <p>{game.description}</p>
              <div>
                <span className="badge text-bg-light mb-2">{genre.name}</span>
                <div>
                  <span className="badge text-bg-secondary me-2">
                    {game.publisher}
                  </span>
                  <span className="badge text-bg-secondary">
                    {game.developer}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
