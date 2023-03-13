import React, { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import "./TwoCamerasScreen.css";
import WebcamImage from "./WebcamImage";
import OrangeCoverAnimation from "./OrangeCoverAnimation";

const TwoCamerasScreen = ({ width, height }) => {
  const [isCoverAnimationComplete, setIsCoverAnimationComplete] =
    useState(false);

  return (
    <>
      {!isCoverAnimationComplete && (
        <OrangeCoverAnimation
          onAnimationComplete={() => setIsCoverAnimationComplete(true)}
        />
      )}
      {isCoverAnimationComplete && (
        <Flex justifyContent="center" alignItems="center">
          <SimpleGrid
            columns={2}
            className="container"
            height="100vh"
            bg="white"
            spacing={2}
            gap={2}
            p={10}
          >
            <Box>
              <WebcamImage width={500} height={480} />
            </Box>
            <Box>
              <WebcamImage width={500} height={480} />
            </Box>
          </SimpleGrid>
        </Flex>
      )}
    </>
  );
};

export default TwoCamerasScreen;
