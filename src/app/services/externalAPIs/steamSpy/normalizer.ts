import { Game } from "@/app/components/types";
import { SteamAPIGame } from "./types";

export const normailzeSteamGames = (
  games: Record<string, SteamAPIGame>
): Game[] => {
  const sortedGames = Object.keys(games)
    .map((key) => games[key])
    .sort((a: SteamAPIGame, b: SteamAPIGame) => {
      return a.average_2weeks < b.average_2weeks ? 1 : -1;
    });

  //as data is an key value pair object, we need to convert it to an array
  return sortedGames.map((gameAPI) => ({
    name: gameAPI.name,
    developer: gameAPI.developer,
    publisher: gameAPI.publisher,
    averagePlayersLast2Weeks: gameAPI.average_2weeks,
    steamID: gameAPI.appid,
  }));
};
