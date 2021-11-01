import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/Container";
import Game from "../components/Game";
import { getGames } from "../lib/getGames";

export default function Games({
  currentlyPlayingGames,
  completedGames,
  stillPlayingGames,
}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Head>
        <title>Games - Ashun Kothari</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Games
            </Heading>
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            <Heading letterSpacing="tight" mb={5} as="h4" size="lg">
              Currently Playing
            </Heading>
            <Game allGames={currentlyPlayingGames} />
            <Heading letterSpacing="tight" mb={5} as="h4" size="lg">
              Constantly making progress time-to-time
            </Heading>
            <Game allGames={stillPlayingGames} />
            <Heading letterSpacing="tight" mb={5} as="h4" size="lg">
              Played
            </Heading>
            <Game allGames={completedGames} />
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const currentlyPlayingGames = await getGames("playing");
  const completedGames = await getGames("completed");
  const stillPlayingGames = await getGames("still_playing");

  return {
    props: { currentlyPlayingGames, completedGames, stillPlayingGames },
  };
}
