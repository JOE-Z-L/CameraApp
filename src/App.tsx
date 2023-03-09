import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import WebcamImage from "./components/WebcamImage";
import Header from "./components/Header";
import TwoCameras from "./components/TwoCameras";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route>
              <Route path="/" element={<WebcamImage />} />
              <Route path="/2" element={<TwoCameras />} />
              <Route path="/4" element={<WebcamImage />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
