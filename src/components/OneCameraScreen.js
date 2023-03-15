import React, { useState } from "react";
import WebcamImage from "./WebcamImage";
import ScreenShotGallery from "./ScreenShotGallery";
import { Box, Flex } from "@chakra-ui/react";
import "./OneCameraScreen.css";
import OrangeCoverAnimation from "./OrangeCoverAnimation";

const OneCamera = () => {
  const [images, setImages] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation && (
        <OrangeCoverAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      <Flex
        className="container"
        height="100vh"
        bg="white"
        flex="1"
        minH="100%"
        minW="100%"
        p={10}
        style={{ display: showAnimation ? "none" : "flex" }}
      >
        <Box className="camera">
          <WebcamImage setImages={setImages} height={854} width={480} />
        </Box>
        <Box className="gallery" pl={8}>
          <ScreenShotGallery images={images} />
        </Box>
      </Flex>
    </>
  );
};

export default OneCamera;
