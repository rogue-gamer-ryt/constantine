import { useColorMode, Box, Heading, LinkBox, LinkOverlay, Text, Flex } from '@chakra-ui/react'

export default function Track(track) {
  
  return ( 
        <LinkBox  p='5' width="100%" borderBottomWidth='1px' borderBottomColor="gray.500">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
              <Text
              color="gray.500"
              minWidth="40px"
              mb={[1, 0]}
            >
              {track.ranking}
            </Text>
              
            <Flex
              flexDirection="column"
              align="flex-start"
              justifyContent="start"
              width="100%"
            >
                
              <LinkOverlay href={track.songUrl} passHref>
                <Heading size="md" as="h3" mb={1} fontWeight="medium">
                  {track.title}
                </Heading>
              </LinkOverlay>
            </Flex>

            <Text
              color="gray.500"
              minWidth="140px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
            >
              {track.artist}
            </Text>
          </Flex>
        </LinkBox >
  );
}