import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Img,
  Flex,
  Select,
  useToast,
  Circle,
  Icon,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import "./WebcamImage.css";
import { AiOutlinePoweroff } from "react-icons/ai";
function WebcamImage() {
  const [img, setImg] = useState([]);
  const webcamRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [isCameraOn, setIsCameraOn] = useState(true);

  const toast = useToast();

  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: selectedDeviceId || "user",
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
    setImg((prevImg) => {
      if (prevImg.length >= 4) {
        prevImg.shift(); // remove first image if array has more than 4 elements
      }
      return [...prevImg, imageSrc];
    });
  }, [webcamRef]);

  const handleDownload = useCallback((src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = "image.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const toggleCamera = () => {
    setIsCameraOn((prevState) => !prevState);
  };

  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px" mb="40px">
      <Box flexShrink={0} flexGrow={0} position="relative">
        {isCameraOn && (
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
        )}

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
          <Button variant="solid" colorScheme="red" onClick={() => setImg([])}>
            Clear All
          </Button>
        </HStack>
      </Box>
      <Box>
        <SimpleGrid
          columns={{ sm: 2, md: 3, lg: 4 }}
          spacing="4"
          minChildWidth="300px"
        >
          {img.map((src, index) => (
            <Card key={index}>
              <CardBody>
                <Img
                  key={index}
                  src={src}
                  borderRadius="lg"
                  boxShadow="xl"
                  rounded="md"
                />
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="orange"
                    onClick={() => handleDownload(src)}
                  >
                    Download
                  </Button>
                  <Button
                    onClick={() =>
                      toast({
                        title: "Button Disabled",
                        description: "This feature is unavailable",
                        status: "warning",
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default WebcamImage;
