import React, { useCallback, useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
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
  HStack,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const MultiShotGallery = ({ images }) => {
  const [typedText, setTypedText] = useState("");
  const [filename, setFilename] = useState("image.jpeg");
  const [imagesArray, setImagesArray] = useState([]);

  const toast = useToast();

  const handleDownload = useCallback(
    (src) => {
      const link = document.createElement("a");
      link.href = src;
      link.download = `${typedText}.jpeg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    [typedText]
  );

  const handleTypedText = (e) => {
    setTypedText(e.target.value);
    if (e.target.value === "") {
      setFilename("image.jpeg");
    } else {
      setFilename(`${e.target.value}.jpeg`);
    }
  };

  useEffect(() => {
    const newImagesArray = images.slice(0, 4);
    const setOfImages = new Set(newImagesArray);
    if (newImagesArray.length !== setOfImages.size) {
      console.log("Duplicate images found.");
    }
    setImagesArray(newImagesArray);
  }, [images]);

  const handleDelete = (index) => {
    const newImagesArray = [...imagesArray];
    newImagesArray.splice(index, 1);
    setImagesArray(newImagesArray);

    toast({
      title: "Image Deleted",
      description: "The image has been deleted.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
    console.log(newImagesArray);
  };

  const handleDownloadAll = useCallback(() => {
    if (imagesArray.length === 0) {
      toast({
        title: "No Images Found",
        description: "Please add images before downloading",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const folderName = `${typedText}`;
    const imagesZip = new JSZip();

    imagesArray.forEach((image, index) => {
      const filename = `image_${index}.jpeg`;
      imagesZip.file(
        filename,
        fetch(image).then((res) => res.blob()),
        { binary: true }
      );
    });

    imagesZip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${folderName}.zip`);
    });
  }, [imagesArray, typedText]);

  return (
    <Box>
      <HStack mb="2">
        <Button
          variant="solid"
          colorScheme="yellow"
          onClick={handleDownloadAll}
        >
          Download All
        </Button>
        <Form>
          <FormControl>
            <Input
              type="text"
              name="title"
              bg="white"
              w="200px"
              placeholder="File name..."
              onChange={handleTypedText}
            />
          </FormControl>
        </Form>
      </HStack>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4 }}
        spacing="4"
        minChildWidth="300px"
      >
        {imagesArray.map((image, index) => (
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
              <ButtonGroup spacing="2" justifyContent="center">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => handleDownload(image)}
                  size="sm"
                >
                  Download
                </Button>
                <Form>
                  <FormControl>
                    <Input
                      type="text"
                      name="title"
                      w="100px"
                      onChange={handleTypedText}
                      size="sm"
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
                  size="sm"
                >
                  Edit
                </Button>
                <Button
                  variant="solid"
                  colorScheme="orange"
                  onClick={() => handleDelete(index)}
                  size="sm"
                >
                  Delete
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MultiShotGallery;
