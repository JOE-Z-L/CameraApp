import React from "react";
import Webcam from "react-webcam";

const CameraSelector = () => {
        const [deviceId, setDeviceId] = React.useState('');
        const [devices, setDevices] = React.useState([]);

    const handleDevices = React.useCallback(
        mediaDevices => {
            const filteredDevices = mediaDevices.filter(({ kind }) => kind === "videoinput");
            setDevices(filteredDevices);
            if (filteredDevices.length > 0) {
                setDeviceId(filteredDevices[0].deviceId);
            }
        },
        [setDevices, setDeviceId]
    );


    React.useEffect(() => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        }, [handleDevices]);

        const handleDeviceChange = event => {
            setDeviceId(event.target.value);
        };

        return (
            <>
                <select value={deviceId} onChange={handleDeviceChange}>
                    <option value="">Choose a device</option>
                    {devices.map(device => (
                        <option key={device.deviceId} value={device.deviceId}>
                            {device.label || `Device ${device.deviceId}`}
                        </option>
                    ))}
                </select>
                {deviceId && (
                    <Webcam audio={false} videoConstraints={{ deviceId }} />
                )}
            </>
        );
    };

    export default CameraSelector;