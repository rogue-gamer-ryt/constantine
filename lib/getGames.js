import { allGames } from "../data/game/AllGames";

export async function getGames(type) {
  return allGames.filter(function (item) {
    return item.type == type;
  });
}
