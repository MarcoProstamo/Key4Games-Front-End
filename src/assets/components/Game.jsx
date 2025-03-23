export default function Game({ game }) {
  return (
    <div className="col-auto cursor-pointer cursor-hover">
      <a href={`/games/${game && game.id}`} className="text-decoration-none">
        <img
          className="game-image"
          src={"http://127.0.0.1:8000/storage/" + game.image}
          alt={game.title}
        />
        <div className="d-flex justify-content-between">
          <span className="game-title fw-semibold mb-0 fs-4">
            {game && game.title}
          </span>
          <span className="game-title fw-semibold fs-4 mb-0">
            {game && game.title !== "League of Legends" && game.price + "$"}
            {game && game.title === "League of Legends" && game.price}
          </span>
        </div>
      </a>
    </div>
  );
}
