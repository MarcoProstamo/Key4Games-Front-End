export default function Game({ title }) {
  return (
    <div className="col-auto cursor-pointer cursor-hover">
      <img
        className="game-image"
        src="https://placehold.co/100x100"
        alt="..."
      />
      <h5 className="game-title fw-semibold">{title}</h5>
    </div>
  );
}
