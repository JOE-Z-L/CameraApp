import React from "react";
import WebcamImage from "./WebcamImage";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import "./OneCameraScreen.css";

const TwoCamerasScreen = () => {
  return (
    <Flex className="container" height="100vh" bg="white">
      <Box className="camera">
        <WebcamImage />
      </Box>
      <Spacer width="40px" />
      <Box className="gallery">
        <WebcamImage />
      </Box>
    </Flex>
  );
};

export default TwoCamerasScreen;
