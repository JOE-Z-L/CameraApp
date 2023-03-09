import React from "react";
import { Center, Flex, Square } from "@chakra-ui/react";
import WEBTEST from "./WEBTEST";
import WebcamImage from "./WebcamImage";

const TwoCameras = () => {
  return (
    <>
      <Flex color="white">
        <Center w="50%" bg="gray">
          <WEBTEST />
        </Center>
        <Square bg="blue.500" size="50%">
          <WebcamImage />
        </Square>
      </Flex>
    </>
  );
};

export default TwoCameras;
