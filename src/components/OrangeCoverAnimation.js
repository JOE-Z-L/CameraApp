import { useEffect } from "react";
import { gsap } from "gsap";
import { Spinner } from "@chakra-ui/react";

const OrangeCoverAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onAnimationComplete });
    tl.fromTo(
      ".orange-cover-animation",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "easeInOut" }
    )
      .fromTo(
        ".orange-cover-animation__text",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
      .to(".orange-cover-animation", {
        opacity: 0,
        duration: 1,
        ease: "easeInOut",
      });
  }, []);

  return (
    <div
      className="orange-cover-animation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
        fontFamily: "helvetica",
        color: "white",
        opacity: 0,
        zIndex: 9999,
      }}
    >
      <div className="orange-cover-animation__text">Innovations for Safety</div>
      <Spinner size="xl" color="white" mt={4} />
    </div>
  );
};

export default OrangeCoverAnimation;
