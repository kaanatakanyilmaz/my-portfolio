import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContentLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center  mb-20 lg:mt-5 ">
        <div className="relative bg-[#fff] w-50 h-50 sm:w-80 sm:h-80 rounded-2xl flex justify-center items-center border-3 border-[#ff7a00] shadow-lg">
          <img
            src="/images/image.png"
            alt="Profile"
            className="absolute top-2 left-3 h-40 sm:h-70 rounded-lg  "
          />
          <Link
            to={"/contact"}
            className="absolute top-40 sm:top-70  font-bold text-xl bg-[#15202b]  text-white py-3 px-20 sm:px-33 border-3 hover:border-[#ff7a00] hover:bg-[#23313f] rounded-2xl shadow-lg
              "
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ContentLeft;
