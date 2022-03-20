import {
  Heading,
  Stack,
} from "@chakra-ui/react";

import TopTracks from "../components/TopTracks";
import Container from "../components/Container";
import Head from "next/head";
import React from "react";

export default function Music() {
  return (
    <>
      <Head>
        <title>Music - Ashun Kothari</title>
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
          <TopTracks />
        </Stack>
      </Container>
    </>
  );
}