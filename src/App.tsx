import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./screens/RootLayout";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import OneCameraScreen from "./components/OneCameraScreen";
import TwoCamerasScreen from "./components/TwoCamerasScreen";
import FourCameraScreen from "./components/FourCameraScreen";
// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<OneCameraScreen />} />
      <Route
        path="twocameras"
        element={<TwoCamerasScreen width={500} height={500} />}
      />

      <Route path="multicameras" element={<FourCameraScreen />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
