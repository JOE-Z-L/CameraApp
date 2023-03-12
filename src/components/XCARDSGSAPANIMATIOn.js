import React, { useState } from "react";
import { motion } from "framer-motion";
import { Grid } from "@chakra-ui/react";
import "./XCARDSGSAPANIMATIOn.css";

const XcardsgsapanimatiOn = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" gap={6} mt="10%">
      <motion.div
        className={`card ${activeCard === 0 ? "active" : "is-inactive"}`}
        colSpan={3}
        onClick={() => handleClick(0)}
        layout
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>Awesome Sauce</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam</p>
      </motion.div>
      <motion.div
        className={`card ${activeCard === 1 ? "active" : "is-inactive"}`}
        colSpan={3}
        onClick={() => handleClick(1)}
        layout
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>Pretty Card </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam</p>
      </motion.div>
      <motion.div
        className={`card ${activeCard === 2 ? "active" : "is-inactive"}`}
        colSpan={3}
        onClick={() => handleClick(2)}
        layout
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>Animation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam</p>
      </motion.div>
      <motion.div
        className={`card ${activeCard === 3 ? "active" : "is-inactive"}`}
        colSpan={3}
        onClick={() => handleClick(3)}
        layout
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>Crazy Stuff</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam</p>
      </motion.div>
    </Grid>
  );
};

export default XcardsgsapanimatiOn;
