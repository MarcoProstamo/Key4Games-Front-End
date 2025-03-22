import { useGameContext } from "../context/GameContext";
import Game from "../components/Game";

export default function AllGamesPage() {
  const games = useGameContext();

  return (
    <div className="container spacing-from-nav mb-5">
      <div className="row row-cols-3 g-5">
        {games && games.map((game, i) => <Game game={game} key={game.id} />)}
      </div>
    </div>
  );
}
