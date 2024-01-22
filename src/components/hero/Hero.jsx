import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Lycee 20 Aout TanTan</motion.h1>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="https://res-console.cloudinary.com/dlhbc051y/media_explorer_thumbnails/de8b113e651d3ea3f851359494cf9e03/detailed"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img
          src="https://res-console.cloudinary.com/dlhbc051y/media_explorer_thumbnails/46212c7931a2f3033dd0858e04174e8f/detailed"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
