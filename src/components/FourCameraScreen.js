import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, SimpleGrid, Box } from "@chakra-ui/react";
import "./FourCameraScreen.css";
import WebcamImage from "./WebcamImage";
import MultiShotGallery from "./MuiltShotGallery";
import OrangeCoverAnimation from "./OrangeCoverAnimation";

const FourCameraScreen = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [images, setImages] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);

  const handleClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const onAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation && (
        <OrangeCoverAnimation onAnimationComplete={onAnimationComplete} />
      )}
      <SimpleGrid columns={2} spacing={4} height="70%" mt="2%">
        <Box height="100%">
          <Grid
            templateColumns="repeat(6, 1fr)"
            bg="gray.50"
            gap={4}
            height="100%"
          >
            <motion.div
              className={`card ${activeCard === 0 ? "active" : "is-inactive"}`}
              colSpan={3}
              onClick={() => handleClick(0)}
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <WebcamImage setImages={setImages} height="100%" width="100%" />
            </motion.div>
            <motion.div
              className={`card ${activeCard === 1 ? "active" : "is-inactive"}`}
              colSpan={3}
              onClick={() => handleClick(1)}
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {" "}
              <WebcamImage setImages={setImages} height="100%" width="100%" />
            </motion.div>
            <motion.div
              className={`card ${activeCard === 2 ? "active" : "is-inactive"}`}
              colSpan={3}
              onClick={() => handleClick(2)}
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {" "}
              <WebcamImage setImages={setImages} height="100%" width="100%" />
            </motion.div>
            <motion.div
              className={`card ${activeCard === 3 ? "active" : "is-inactive"}`}
              colSpan={3}
              onClick={() => handleClick(3)}
              layout
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {" "}
              <WebcamImage setImages={setImages} height="100%" width="100%" />
            </motion.div>
          </Grid>
        </Box>
        <Box height="100%" width="100%">
          <MultiShotGallery images={images} />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default FourCameraScreen;
