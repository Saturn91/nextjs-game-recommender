import { Game } from "@/app/components/types";
import { SteamAPIGame } from "./types";

export const normailzeSteamGame = (game: SteamAPIGame): Game => {
  return {
    name: game.name,
    developer: game.developer,
    publisher: game.publisher,
    averagePlayersLast2Weeks: game.average_2weeks,
  };
};
