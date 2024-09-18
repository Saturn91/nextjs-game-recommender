import { FC } from "react";
import { Game } from "../types";
import GameCard from "./GameCard";
import { normailzeSteamGames } from "@/app/services/externalAPIs/steamSpy/normalizer";

interface Props {
  fetchGamesEndpoint?: string;
  games?: Game[];
}

const GameList: FC<Props> = async ({ games = [], fetchGamesEndpoint }) => {
  const fetchGames = async () => {
    const response = await fetch(fetchGamesEndpoint || "");
    const data = await response.json();
    return normailzeSteamGames(data);
  };

  const list = await fetchGames();

  return (
    <ul className="flex flex-col gap-16 items-center justify-center">
      {list.map((game, i) => (
        <GameCard key={`game-${i}`} game={game} />
      ))}
    </ul>
  );
};

export default GameList;
