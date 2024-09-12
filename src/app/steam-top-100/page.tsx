"use client";

import { Suspense } from "react";
import GameList from "../components/games/GameList";
import getTop100SteamGames from "../services/externalAPIs/steamSpy/top100SteamGames";

export default function Steam() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameList fetchGames={getTop100SteamGames} />
    </Suspense>
  );
}
