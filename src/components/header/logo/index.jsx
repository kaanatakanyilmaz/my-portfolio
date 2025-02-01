import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className=" font-extrabold leading-12 text-3xl text-[#133a9f] p-3"
      >
        <Link to={"/"} class="relative group">
          <div className=" flex flex-row md:flex-col items-center text-gray-100 text-3xl md:text-3xl  font-bold relative mb-16 lg:mb-4">
            <div className=" mr-4 md:mr-12 text-[#15202b]">Kaan</div>
            <div className=" mr-4 md:ml-6 text-[#15202b]">Atakan</div>
            <div className=" mr-4 md:ml-12 text-[#15202b]">Yılmaz</div>
            <span className="absolute w-5 h-5 border-b-[5px] border-l-[5px] border-[#ff7a00] top-12 -left-4 md:top-25 md:-left-10" />
            <span className="absolute w-5 h-5 border-t-[5px] border-r-[5px] border-[#ff7a00] bottom-8 right-0 md:bottom-25 md:-right-10" />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Logo;
