import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Box, Button, Image, Select } from "@chakra-ui/react";
import "../App.css";

function WebcamImageTEST() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [videoWidth, setVideoWidth] = useState(720);
  const [videoHeight, setVideoHeight] = useState(720);
  const [brightness, setBrightness] = useState(50); // initial value of brightness
  const [colorTemperature, setColorTemperature] = useState(2400);
  const [zoom, setZoom] = useState(1);

  const videoConstraints = {
    width: videoWidth,
    height: videoHeight,
    deviceId: selectedDeviceId,
    whiteBalanceMode: "continuous", // set white balance mode to continuous
    brightness: brightness,
    colorTemperature: colorTemperature,
    zoom: zoom,
  };

  const handleBrightnessChange = (event) => {
    setBrightness(parseInt(event.target.value));
    console.log(setBrightness);
  };

  const handleColorTemperatureChange = (event) => {
    const colorTemp = parseInt(event.target.value);
    setColorTemperature(colorTemp);
    console.log(setColorTemperature);
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
    const link = document.createElement("a");
    link.download = "screenshot.jpg";
    link.href = imageSrc;
    link.click();
  }, [webcamRef]);

  return (
    <Box className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={videoHeight}
            width={videoWidth}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <Button colorScheme="red" variant="solid" onClick={capture}>
            Capture photo
          </Button>
        </>
      ) : (
        <>
          <Image src={img} alt="screenshot" />
          <Button onClick={() => setImg(null)}>Retake</Button>
        </>
      )}
      {devices.length > 0 && (
        <Select placeholder="Select option">
          value={selectedDeviceId}
          onChange={handleDeviceChange}>
          <option value="">Choose a camera</option>
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `Device ${device.deviceId}`}
            </option>
          ))}
        </Select>
      )}
      <Box>
        <label htmlFor="width-input">Resolution:</label>
        <Select
          bg="white"
          color="black"
          variant="Outline"
          placeholder="Outline"
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

      <Box className="zoom-container">
        <button onClick={() => setZoom(zoom + 0.1)}>+</button>
        <button onClick={() => setZoom(zoom - 0.1)}>-</button>
        <span>Zoom level: {zoom.toFixed(1)}</span>
      </Box>

      <Box>
        <label htmlFor="brightness-slider">Brightness:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={handleBrightnessChange}
          id="brightness-slider"
        />
      </Box>
      <Box>
        <label htmlFor="color-temp-select">Color Temperature:</label>
        <Select
          id="color-temp-select"
          value={colorTemperature}
          onChange={handleColorTemperatureChange}
        >
          <option value={2700}>Warm (2700K)</option>
          <option value={4000}>Neutral (4000K)</option>
          <option value={5000}>Daylight (5000K)</option>
          <option value={6500}>Cool (6500K)</option>
        </Select>
      </Box>
    </Box>
  );
}

export default WebcamImageTEST;
