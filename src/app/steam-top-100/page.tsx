"use client";

import { Suspense } from "react";
import GameList from "../components/games/GameList";
import getTop100SteamGames from "../services/externalAPIs/steamSpy/top100SteamGames";

export default function Steam() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2 className="text-center">Last two weeks top 100</h2>
      <GameList fetchGames={getTop100SteamGames} />
    </Suspense>
  );
}
