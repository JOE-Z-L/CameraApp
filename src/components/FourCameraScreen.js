import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid, SimpleGrid, Box } from "@chakra-ui/react";
import "./FourCameraScreen.css";
import WebcamImage from "./WebcamImage";
import ScreenShotGallery from "./ScreenShotGallery";
import MultiShotGallery from "./MuiltShotGallery";

const FourCameraScreen = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [images, setImages] = useState([]);

  const handleClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box height="80px">
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" gap={6} mt="10%">
          <motion.div
            className={`card ${activeCard === 0 ? "active" : "is-inactive"}`}
            colSpan={3}
            onClick={() => handleClick(0)}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <WebcamImage setImages={setImages} height={480} width={500} />
          </motion.div>
          <motion.div
            className={`card ${activeCard === 1 ? "active" : "is-inactive"}`}
            colSpan={3}
            onClick={() => handleClick(1)}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {" "}
            <WebcamImage setImages={setImages} height={480} width={500} />
          </motion.div>
          <motion.div
            className={`card ${activeCard === 2 ? "active" : "is-inactive"}`}
            colSpan={3}
            onClick={() => handleClick(2)}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {" "}
            <WebcamImage setImages={setImages} height={480} width={500} />
          </motion.div>
          <motion.div
            className={`card ${activeCard === 3 ? "active" : "is-inactive"}`}
            colSpan={3}
            onClick={() => handleClick(3)}
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {" "}
            <WebcamImage setImages={setImages} height={480} width={500} />
          </motion.div>
        </Grid>
      </Box>
      <Box mt="10%" width="80%">
        <MultiShotGallery images={images} />
      </Box>
    </SimpleGrid>
  );
};

export default FourCameraScreen;
