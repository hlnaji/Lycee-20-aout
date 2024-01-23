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
          <motion.h1 variants={textVariants}>
            ثانوية 20 غشت التأهيلية بطانطان
          </motion.h1>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="https://res.cloudinary.com/dlhbc051y/image/upload/v1705961120/lycee/stqag0ufhfxi41qu7eng.png"
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
        ثانوية 20 غشت التأهيلية بطانطان
      </motion.div>
      <div className="imageContainer">
        <img
          src="https://res.cloudinary.com/dlhbc051y/image/upload/v1705961164/lycee/quq1ynvgq2h1rphzqss9.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
