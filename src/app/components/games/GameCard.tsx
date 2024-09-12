import { FC } from "react";
import { Game } from "../types";

interface Props {
  game: Game;
}

const GameCard: FC<Props> = ({ game }) => {
  return (
    <div className="py-1">
      <p>name: {game.name}</p>
      <p>developer: {game.developer}</p>
      <p>publisher: {game.publisher}</p>
      <p>
        avereg activity within last 2 weeks:{" "}
        {game?.averagePlayersLast2Weeks || 0}
      </p>
    </div>
  );
};

export default GameCard;
