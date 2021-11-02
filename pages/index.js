import {
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
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
          maxWidth="500px"
        >
          <Heading mb={3}>Hi, I'm Ashun Kothari 👋</Heading>
          <Text color={colorSecondary[colorMode]}>
            Why don't you take a look around so you can know me be better
          </Text>
          <HStack mt={3}>
            <NextLink href="https://github.com/rogue-gamer-ryt">
              <Button colorScheme="gray" leftIcon={<FaGithub />}>
                Github
              </Button>
            </NextLink>
            <NextLink href="https://twitter.com/ashun_77">
              <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
            </NextLink>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
}
