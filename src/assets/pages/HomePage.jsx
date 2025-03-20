import Game from "../components/Game";
import { useGameContext } from "../context/GameContext";

export default function HomePage() {
  const games = useGameContext();

  return (
    <>
      <section id="CardContainer" className="container my-5">
        <div className="d-flex align-items-center gap-3 mb-4 cursor-pointer">
          <h2 className="text-light fw-semibold">Hottest </h2>
          <i className="fa-solid fa-chevron-right fs-4 text-secondary"></i>
        </div>
        <div className="row row-cols-3 g-5">
          {games &&
            games.map((game) => <Game title={game.title} key={game.id} />)}
        </div>
      </section>
    </>
  );
}
