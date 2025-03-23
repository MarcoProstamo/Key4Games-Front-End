import Game from "../components/Game";
import { useGameContext } from "../context/GameContext";

export default function HomePage() {
  const games = useGameContext();

  return (
    <>
      <div className="jumbo"></div>
      <section id="CardContainer" className="container">
        <div className="d-flex align-items-center gap-3 mb-4 cursor-pointer">
          <a
            href="/games"
            className="text-light fw-semibold h2 text-decoration-none"
          >
            Hottest{" "}
          </a>
          <i className="fa-solid fa-chevron-right fs-4 text-secondary"></i>
        </div>
        <div className="row row-cols-3 g-4 mb-5">
          {games &&
            games.map((game, i) => {
              if (i > 0 && i < 10) return <Game game={game} key={game.id} />;
            })}
        </div>
      </section>
    </>
  );
}
