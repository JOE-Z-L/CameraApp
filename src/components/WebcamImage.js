import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Box, Button, Flex, Select, Circle, HStack } from "@chakra-ui/react";
import "./WebcamImage.css";

function WebcamImage({ setImages }) {
  const webcamRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");

  const videoConstraints = {
    width: 420,
    height: 420,
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

  ///CAPTURE E DOWNLOAD
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImg) => {
      const updatedImages = [...prevImg, imageSrc];
      setImages(updatedImages); // update images state in parent component
      return updatedImages;
    });
  }, [webcamRef, setImages]);

  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px" mb="40px">
      <Box flexShrink={0} flexGrow={0} position="relative">
        <Webcam
          audio={false}
          mirrored={true}
          height={720}
          width={1280}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="WebcamStream"
        />

        <HStack direction="row" spacing={4} align="center" my={2}>
          {devices.length > 0 && (
            <Select
              className="Select"
              variant="filled"
              placeholder="Select option"
              value={selectedDeviceId}
              onChange={handleDeviceChange}
            >
              {devices.map((device) => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.label || `Device ${device.deviceId}`}
                </option>
              ))}
            </Select>
          )}

          <Circle
            position="absolute"
            bottom="100px"
            left="50%"
            transform="translateX(-50%)"
            size="80px"
            borderWidth="4px"
            borderColor="whitesmoke"
            bg="transparent"
            color="white"
            boxShadow="md"
            onClick={capture}
            _hover={{ bg: "red.500", color: "white" }}
            _active={{ bg: "red.700", color: "white" }}
          >
            {/* You can add any content inside the Circle component */}
          </Circle>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={() => setImages([])}
          >
            Clear All
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}

export default WebcamImage;
