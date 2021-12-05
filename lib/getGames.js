import { allGames } from "../data/game/AllGames";
import prisma from "../lib/prisma";

export async function getGames(type) {
  return await prisma.game.findMany({
    where: {
      type: {
        equals: type,
      },
    },
  });
}
