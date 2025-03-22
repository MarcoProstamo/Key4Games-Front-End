export default function Game({ game }) {
  console.log(game);

  return (
    <div className="col-auto cursor-pointer cursor-hover">
      <a href={`/games/${game && game.id}`} className="text-decoration-none">
        <img
          className="game-image"
          src="https://placehold.co/100x100"
          alt="..."
        />
        <h5 className="game-title fw-semibold">{game && game.title}</h5>
      </a>
    </div>
  );
}
