import React, { useCallback } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Img,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

const ScreenShotGallery = ({ images }) => {
  const toast = useToast();

  const handleDownload = useCallback((src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = "image.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <Box>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4 }}
        spacing="4"
        minChildWidth="300px"
      >
        {images.map((image, index) => (
          <Card key={index}>
            <CardBody>
              <Img
                key={index}
                src={image}
                borderRadius="lg"
                boxShadow="xl"
                rounded="md"
              />
            </CardBody>
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="orange"
                  onClick={() => handleDownload(image)}
                >
                  Download
                </Button>
                <Button
                  onClick={() =>
                    toast({
                      title: "Button Disabled",
                      description: "This feature is unavailable",
                      status: "warning",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Edit
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ScreenShotGallery;
