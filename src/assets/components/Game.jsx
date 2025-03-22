export default function Game({ title, id }) {
  return (
    <div className="col-auto cursor-pointer cursor-hover">
      <a href={`/games/${id}`} className="text-decoration-none">
        <img
          className="game-image"
          src="https://placehold.co/100x100"
          alt="..."
        />
        <h5 className="game-title fw-semibold">{title}</h5>
      </a>
    </div>
  );
}
