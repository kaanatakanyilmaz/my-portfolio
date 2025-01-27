import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContentRight() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center  h-screen">
        <div className="relative bg-[#fff] w-100 h-100 rounded-2xl flex justify-center items-center border-3 border-[#ff7a00] shadow-lg">
          <img
            src="/images/image.png"
            alt="Profile"
            className="absolute top-2 left-3 h-90 rounded-lg  "
          />
          <Link
            to={"/contact"}
            className="absolute top-90  font-bold text-xl bg-[#15202b]  text-white py-3 px-45 border-3 hover:border-[#ff7a00] hover:bg-[#23313f] rounded-2xl shadow-lg
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ContentRight;
