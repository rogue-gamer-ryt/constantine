import { Flex, Heading, HStack, Text, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";


export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container centerContent>
      <Head>
        <title>Home - Ashun Kothari</title>
      </Head>
      <HStack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="800px"
        px={2}
      >
        <ProfileCard />
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="400px"
        >
          <Heading mb={3}>Hi, I'm Ashun Kothari</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
            nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus
            lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.
          </Text>
        </Flex>
      </HStack>
    </Container>
  );
}
