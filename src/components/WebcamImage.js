import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Box,
  Button,
  Select,
  Flex,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import "./WebcamImage.css";
import { Icon } from "@chakra-ui/icons";
import { SlCamera } from "react-icons/sl";

function WebcamImage({ setImages, width = 400, height = 400 }) {
  const webcamRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");

  const videoConstraints = {
    width: width,
    height: height,
    deviceId: selectedDeviceId,
  };

  const handleDevices = useCallback((mediaDevices) => {
    setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"));
  }, []);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
    console.log(event.target.value);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImg) => {
      const updatedImages = [...prevImg, imageSrc];
      setImages(updatedImages);
      return updatedImages;
    });
  }, [webcamRef, setImages]);

  return (
    <SimpleGrid columns={1}>
      <Box height="100%" position="relative">
        <Webcam
          audio={false}
          mirrored={true}
          height={height}
          width={width}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="WebcamStream"
        />
        <Flex position="absolute" bottom="2%" w="100%">
          <HStack bg="transparent" w="100%" justifyContent="center">
            <Box w="33%">
              {devices.length > 0 && (
                <Select
                  className="Select"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  placeholder="Select a Camera"
                  value={selectedDeviceId}
                  onChange={handleDeviceChange}
                  w="100%"
                  ml={2}
                >
                  {devices.map((device) => (
                    <option key={device.deviceId} value={device.deviceId}>
                      {device.label || `Device ${device.deviceId}`}
                    </option>
                  ))}
                </Select>
              )}
            </Box>
            <Box w="33%" textAlign="center">
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "red.500", borderColor: "red.500" }}
                onClick={capture}
                w="70%"
              >
                <Icon as={SlCamera}></Icon>
              </Button>
            </Box>
            <Box w="33%" textAlign="right">
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "red.500", borderColor: "red.500" }}
                onClick={() => setImages([])}
                w="70%"
              >
                Clear All
              </Button>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </SimpleGrid>
  );
}
export default WebcamImage;
