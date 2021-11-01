import { Flex, Image } from "@chakra-ui/react";

export default function ProfileCard() {
  return (
    <Flex align="center">
      <Image
        borderRadius="full"
        boxSize="200px"
        src="../images/profile.jpg"
        alt="Ashun Kothari"
      />
    </Flex>
  );
}
