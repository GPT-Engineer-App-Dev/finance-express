import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="3">
          <Heading as="h1" size="xl" mb={4}>
            Main News Section
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading as="h2" size="md" mb={2}>
                Headline 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} bg="gray.100" borderRadius="md">
              <Heading as="h2" size="md" mb={2}>
                Headline 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" bg="gray.50" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={2}>
                Additional Content 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={2}>
                Additional Content 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;