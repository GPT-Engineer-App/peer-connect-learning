import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Box, Input, Textarea, IconButton, Image, Badge } from "@chakra-ui/react";
import { FaStar, FaChalkboardTeacher, FaUserGraduate, FaSearch } from "react-icons/fa";

const workshops = [
  { id: 1, title: "Introduction to Cooking", instructor: "Chef John", rating: 4.5, image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwd29ya3Nob3B8ZW58MHx8fHwxNzE3NjQzMzI5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, title: "Learn Guitar Basics", instructor: "Jane Doe", rating: 4.7, image: "https://images.unsplash.com/photo-1695728130932-7b5967d59f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjB3b3Jrc2hvcHxlbnwwfHx8fDE3MTc2NDMzMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, title: "Beginner's Guide to Python", instructor: "Alex Smith", rating: 4.8, image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcHxlbnwwfHx8fDE3MTc2NDMzMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handleFeedbackSubmit = () => {
    // Implement feedback submission functionality here
    alert("Feedback submitted!");
    setFeedback("");
  };

  return (
    <Box bgImage="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bmlxdWUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxNzY0MzMzMHww&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPosition="center" minH="100vh">
      <Container centerContent maxW="container.xl" py={8}>
        <VStack spacing={8} width="100%">
          <Text fontSize="4xl" fontWeight="bold">
            SkillShare Connect
          </Text>
          <HStack spacing={4} width="100%">
            <Input placeholder="Search for workshops..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
          </HStack>
          <VStack spacing={4} width="100%">
            {workshops.map((workshop) => (
              <Box key={workshop.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
                <HStack spacing={4}>
                  <Image src={workshop.image} alt={workshop.title} boxSize="150px" />
                  <VStack align="start" spacing={2}>
                    <Text fontSize="2xl" fontWeight="bold">
                      {workshop.title}
                    </Text>
                    <Text fontSize="md">Instructor: {workshop.instructor}</Text>
                    <HStack>
                      <FaStar color="gold" />
                      <Text>{workshop.rating}</Text>
                    </HStack>
                    <Button onClick={() => setSelectedWorkshop(workshop)}>Join Workshop</Button>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
          {selectedWorkshop && (
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Feedback for {selectedWorkshop.title}
              </Text>
              <Textarea placeholder="Write your feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} />
              <Button mt={2} onClick={handleFeedbackSubmit}>
                Submit Feedback
              </Button>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
