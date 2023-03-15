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

function WebcamImage({ setImages, width, height }) {
  const webcamRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [videoWidth, setVideoWidth] = useState(480);
  const [videoHeight, setVideoHeight] = useState(854);

  const videoConstraints = {
    width: videoWidth,
    height: videoHeight,
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
  };

  const handleWidthChange = (event) => {
    const width = parseInt(event.target.value);
    if ([480, 720, 1080, 1440].includes(width)) {
      setVideoWidth(width);
      setVideoHeight(width);
    }
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
      <Box height="90%" position="relative">
        <Webcam
          audio={false}
          mirrored={false}
          height={videoHeight}
          width={videoWidth}
          minScreenshotHeight={720}
          minScreenshotWidth={1280}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="WebcamStream"
        />
        <Flex position="center" bottom="2%" w="100%">
          <HStack bg="transparent" w="100%" justifyContent="center" mt={5}>
            <Box>
              {devices.length > 0 && (
                <Select
                  className="Select"
                  variant="outline"
                  borderColor="black"
                  color="black"
                  placeholder="Select a Camera"
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
            </Box>

            <Box>
              <Select
                bg="white"
                variant="outline"
                borderColor="black"
                color="black"
                placeholder="Resolution"
                id="width-input"
                value={videoWidth}
                onChange={handleWidthChange}
              >
                <option value={480}>480p</option>
                <option value={720}>720p</option>
                <option value={1080}>1080p</option>
                <option value={1440}>1440p</option>
              </Select>
            </Box>

            <Box w="33%" textAlign="center">
              <Button
                variant="solid"
                colorScheme="blue"
                _hover={{ bg: "red.500", borderColor: "red.500" }}
                onClick={capture}
                w="70%"
              >
                <Icon as={SlCamera}></Icon>
              </Button>
            </Box>
            <Box w="33%" textAlign="right">
              <Button
                variant="solid"
                colorScheme="orange"
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
