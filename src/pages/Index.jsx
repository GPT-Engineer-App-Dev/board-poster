import { Container, VStack, Box, Text, Input, Textarea, Button, Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" p={4} mb={4} borderRadius="md">
        <Heading size="lg">Public Post Board</Heading>
      </Box>

      {/* Main Section */}
      <Box as="main" flex="1" mb={4}>
        <VStack spacing={4} align="stretch">
          {/* Example Post */}
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
            <Text fontWeight="bold">User1</Text>
            <Text mt={2}>This is an example post content.</Text>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
            <Text fontWeight="bold">User2</Text>
            <Text mt={2}>Another example post content.</Text>
          </Box>
        </VStack>
      </Box>

      {/* Post Submission Form */}
      <Box as="form" p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
        <VStack spacing={4} align="stretch">
          <Input placeholder="Your Name" />
          <Textarea placeholder="Your Post" />
          <Button colorScheme="blue">Submit</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;