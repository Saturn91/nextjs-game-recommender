"use client";

import { inter, roboto } from "@/app/styles/fonts";
import top100SteamGames from "../services/externalAPIs/steamSpy/top100SteamGames";

export default function Steam() {
  top100SteamGames();

  return (
    <div>
      <div className={`${inter.className}`}>Next js test</div>
      <div className={`${roboto.className}`}>Next js test</div>
    </div>
  );
}
