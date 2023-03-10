import React from "react";
import {
  Box,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={tasks.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};
export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};

export default Dashboard;
