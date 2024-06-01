import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>World</Link>
          <Link href="#" p={2}>Business</Link>
          <Link href="#" p={2}>Tech</Link>
          <Link href="#" p={2}>Markets</Link>
          <Link href="#" p={2}>Opinion</Link>
        </Flex>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Main News Section</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg">Headline 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg">Headline 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg">Headline 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" bg="gray.50" p={4} borderRadius="md" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Additional Content 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Additional Content 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;