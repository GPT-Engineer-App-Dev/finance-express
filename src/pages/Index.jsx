import { Container, Box, Heading, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box w="full">
          <Heading as="h1" size="2xl" mb={4}>
            Financial Times
          </Heading>
          <Text fontSize="lg">
            Welcome to the Financial Times. Stay updated with the latest financial news and insights.
          </Text>
        </Box>
        <HStack align="start" spacing={8} w="full">
          <Box flex="3">
            <Heading as="h2" size="lg" mb={4}>
              Main News
            </Heading>
            <VStack spacing={4} align="start">
              <Box>
                <Heading as="h3" size="md">News Article 1</Heading>
                <Text>Summary of the news article 1...</Text>
              </Box>
              <Divider />
              <Box>
                <Heading as="h3" size="md">News Article 2</Heading>
                <Text>Summary of the news article 2...</Text>
              </Box>
              <Divider />
              <Box>
                <Heading as="h3" size="md">News Article 3</Heading>
                <Text>Summary of the news article 3...</Text>
              </Box>
            </VStack>
          </Box>
          <Box flex="1" bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>
              Sidebar
            </Heading>
            <VStack spacing={4} align="start">
              <Box>
                <Heading as="h3" size="md">Additional Content 1</Heading>
                <Text>Details about additional content 1...</Text>
              </Box>
              <Divider />
              <Box>
                <Heading as="h3" size="md">Additional Content 2</Heading>
                <Text>Details about additional content 2...</Text>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;