import React from "react";

import { motion } from "framer-motion";

function ContentHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full  "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          Projects
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>
    </motion.div>
  );
}

export default ContentHeader;
