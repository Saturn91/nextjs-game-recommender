"use client";

import { FC, useEffect, useState } from "react";
import { Game } from "../types";
import GameCard from "./GameCard";

interface Props {
  fetchGames?: () => Promise<Game[]>;
  games?: Game[];
}

const GameList: FC<Props> = async ({ games = [], fetchGames }) => {
  const [list, setList] = useState(games);

  useEffect(() => {
    if (!games?.length && fetchGames) {
      fetchGames().then((steamGames) => setList(steamGames));
    }
  }, []);

  return list.map((game, i) => <GameCard key={`game-${i}`} game={game} />);
};

export default GameList;
