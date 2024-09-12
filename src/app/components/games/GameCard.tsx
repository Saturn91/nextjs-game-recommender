import { FC } from "react";
import { Game } from "../types";
import Image from "next/image";

interface Props {
  game: Game;
}

const GameCard: FC<Props> = ({ game }) => {
  return (
    <li className="flex  rounded overflow-hidden shadow-custom-light dark:shadow-custom-dark p-4 border-color-border bg-card">
      <Image
        style={{ maxWidth: "340px" }}
        alt={`${game.name} header`}
        aria-hidden
        src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.steamID}/header.jpg`}
        width={200}
        height={100}
        layout="responsive"
      />
      <div className="px-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">{game.name}</h2>
          <p>Developer: {game.developer}</p>
          <p>Publisher: {game.publisher}</p>
        </div>
        <div className="pt-4 border-t border-color-border">
          <p>
            Average activity within last 2 weeks:{" "}
            {game.averagePlayersLast2Weeks || 0}
          </p>
        </div>
      </div>
    </li>
  );
};

export default GameCard;
