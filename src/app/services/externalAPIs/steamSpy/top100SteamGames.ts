import { Game } from "@/app/components/types";
import { SteamAPIGame } from "./types";
import { normailzeSteamGame } from "./normalizer";

const apiEndpoint = "/api/top-100-steam-games";

export default async function getTop100SteamGames(): Promise<Game[]> {
  const response = await fetch(apiEndpoint);
  const data = await response.json();

  if (!response.ok) {
    console.log("Error fetching top 100 games");
    return [];
  }

  // Sort by averageUser last 2 weeks, with the highest at the top
  const sortedGames = Object.keys(data)
    .map((key) => data[key])
    .sort((a: SteamAPIGame, b: SteamAPIGame) => {
      return a.average_2weeks < b.average_2weeks ? 1 : -1;
    });

  //as data is an key value pair object, we need to convert it to an array
  return sortedGames.map((gameAPI) => normailzeSteamGame(gameAPI));
}
