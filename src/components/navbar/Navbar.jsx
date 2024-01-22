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
          Lycee 20 Aout
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/people/%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84%D9%8A%D8%A9-20-%D8%BA%D8%B4%D8%AA-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A5%D9%82%D9%84%D9%8A%D9%85%D9%8A%D8%A9-%D8%B7%D8%A7%D9%86%D8%B7%D8%A7%D9%86/100087363576820/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zM18.477 5.977c-.623 0-1.127.504-1.127 1.127v2.002h2.253V7.104c0-.623-.504-1.127-1.126-1.127zM16 11.189c-.815 0-1.477.66-1.477 1.476v7.848h2.953v-7.848C17.477 11.85 16.814 11.189 16 11.189zM13.52 5.977c-.623 0-1.126.504-1.126 1.127v2.002h2.252V7.104c0-.623-.503-1.127-1.126-1.127z" />
            </svg>
          </a>

          <a href="https://maps.app.goo.gl/KWj66LogRm1JPiBf6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M30.619 2.38a1.382 1.382 0 00-1.952 0l-9.977 9.977a1.378 1.378 0 00-.318.504l-3.682 14.73a1.366 1.366 0 001.75 1.75l14.73-3.682a1.378 1.378 0 00.504-.318l9.977-9.977a1.375 1.375 0 000-1.952zm-4.606 4.605l-11.364 11.364-12.73 3.182 3.182-12.73 11.364-11.364 8.148 8.148z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
