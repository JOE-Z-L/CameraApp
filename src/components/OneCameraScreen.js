import React from "react";
import WebcamImage from "./WebcamImage";
import ScreenShotGallery from "./ScreenShotGallery";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import "./OneCameraScreen.css";

const OneCamera = () => {
  const [images, setImages] = useState([]);

  return (
    <Flex className="container" height="100vh" bg="white">
      <Box className="camera">
        <WebcamImage setImages={setImages} />
      </Box>
      <Spacer width="40px" />
      <Box className="gallery">
        <ScreenShotGallery images={images} />
      </Box>
    </Flex>
  );
};

export default OneCamera;
