import { SteamSpyGame } from "./types";

const apiEndpoint = "/api/top-100-steam-games";

export default async function getTop100SteamGames(): Promise<SteamSpyGame[]> {
  const response = await fetch(apiEndpoint);
  console.log(response);
  const data = await response.json();

  if (!response.ok) {
    console.log("Error fetching top 100 games");
    return [];
  }

  return JSON.parse(data);
}
