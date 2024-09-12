"use client";

import { Suspense } from "react";
import GameList from "../components/games/GameList";

export default function Steam() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2 className="text-center">Last two weeks top 100</h2>
      <GameList
        fetchGamesEndpoint={
          "https://steamspy.com/api.php?request=top100in2weeks"
        }
      />
    </Suspense>
  );
}
