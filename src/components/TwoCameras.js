import React from "react";
import { Flex, Square } from "@chakra-ui/react";

import WebcamImage from "./WebcamImage";

const TwoCameras = () => {
  return (
    <>
      <Flex color="white">
        <Square bg="blue.500" size="50%">
          <WebcamImage />
        </Square>

        <Square bg="blue.500" size="50%">
          <WebcamImage />
        </Square>
      </Flex>
    </>
  );
};

export default TwoCameras;
