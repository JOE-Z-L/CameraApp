import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import WebcamImageMaster from "./components/WebcamImageMaster";
import TwoCameras from "./components/TwoCameras";
import RootLayout from "./screens/RootLayout";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import OneCameraScreen from "./components/OneCameraScreen";
// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<OneCameraScreen />} />
      <Route path="twocameras" element={<TwoCameras />} />
      <Route path="fourcameras" element={<WebcamImageMaster />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
