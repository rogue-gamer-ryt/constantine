import { AspectRatio, Box, Image, SimpleGrid, Tooltip } from "@chakra-ui/react";
import React from "react";

const Game = ({ allGames }) => {
  return (
    <Box mb={10} mt={5} display="block" width="100%">
      <SimpleGrid columns={3} spacing={10}>
        {allGames.map((game) => (
          <AspectRatio maxW="400px" ratio={5 / 6} width="100%" key={game.name}>
            <Tooltip label={game.name}>
              <Image
                boxSize="250px"
                borderRadius="5px"
                objectFit="cover"
                src={game.image}
                alt={game.alt}
              />
            </Tooltip>
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Game;
