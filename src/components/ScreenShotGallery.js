import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  Img,
  Input,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const ScreenShotGallery = ({ images }) => {
  const [typedText, setTypedText] = useState("");
  const [filename, setFilename] = useState("image.jpeg");

  const toast = useToast();

  const handleDownload = useCallback(
    (src) => {
      const link = document.createElement("a");
      link.href = src;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    [filename]
  );

  const handleTypedText = (e) => {
    setTypedText(e.target.value);
    if (e.target.value === "") {
      setFilename("image.jpeg");
    } else {
      setFilename(`${e.target.value}.jpeg`);
    }
  };

  return (
    <Box>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4 }}
        spacing="4"
        minChildWidth="400px"
      >
        {images.map((image, index) => (
          <Card key={index}>
            <CardBody
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
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
                <Form>
                  <FormControl>
                    <Input
                      type="text"
                      name="title"
                      w="200px"
                      onChange={handleTypedText}
                    />
                  </FormControl>
                </Form>

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
