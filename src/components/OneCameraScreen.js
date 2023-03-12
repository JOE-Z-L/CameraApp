import React from "react";
import WebcamImage from "./WebcamImage";
import ScreenShotGallery from "./ScreenShotGallery";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import "./OneCameraScreen.css";

const OneCamera = () => {
  const [images, setImages] = useState([]);

  return (
    <Flex
      className="container"
      height="100vh"
      bg="white"
      flex="1"
      minH="100%"
      minW="100%"
      p={10}
    >
      <Box className="camera">
        <WebcamImage setImages={setImages} height={480} width={500} />
      </Box>
      <Box className="gallery" pl={8}>
        <ScreenShotGallery images={images} />
      </Box>
    </Flex>
  );
};

export default OneCamera;
