import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "../App.css";

function WebcamImageMaster() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");

  const videoConstraints = {
    width: 420,
    height: 420,
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
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}

      {devices.length > 0 && (
        <select
          placeholder="Select option"
          value={selectedDeviceId}
          onChange={handleDeviceChange}
        >
          <option value="">Choose a camera</option>
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `Device ${device.deviceId}`}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default WebcamImageMaster;
