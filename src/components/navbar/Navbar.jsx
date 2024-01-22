import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          build by team: Hamza Labbaalli & Wissal Wargui
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/people/%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84%D9%8A%D8%A9-20-%D8%BA%D8%B4%D8%AA-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A5%D9%82%D9%84%D9%8A%D9%85%D9%8A%D8%A9-%D8%B7%D8%A7%D9%86%D8%B7%D8%A7%D9%86/100087363576820/">
            <img
              src="https://res-console.cloudinary.com/dlhbc051y/media_explorer_thumbnails/25b6c9b94f934f2e7cd37d2d9e00fad5/detailed"
              alt=""
            />
          </a>
          <a href="https://maps.app.goo.gl/KWj66LogRm1JPiBf6">
            <img
              src="https://res-console.cloudinary.com/dlhbc051y/media_explorer_thumbnails/c54fb3c9c9ad9a11298f951587c0cf45/detailed"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
