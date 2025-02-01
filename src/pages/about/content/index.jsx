import React from "react";
import { motion } from "framer-motion";

function Content() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          About Me
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>
      <div className="flex justify-center">
        <p className="text-[#15202b] p-15 leading-8 text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          I graduated from the Department of Computer Engineering at Duzce
          University. As an engineer eager to continuously develop myself and
          stay updated with the latest technologies, I strive to contribute to
          innovative projects where I can apply my problem-solving skills and
          analytical thinking abilities. With a strong foundation in software
          development and hands-on experience in React, React Native, and
          front-end technologies, I am passionate about creating user-focused
          solutions that seamlessly combine functionality and modern design
          principles. I aim to work in a dynamic and innovative environment
          where teamwork, creativity, and continuous learning are encouraged. I
          believe that adapting quickly to new challenges, collaborating
          effectively within teams, and maintaining a proactive approach are
          essential qualities in delivering impactful results. My ultimate goal
          is to bring value to every project I am a part of while advancing my
          career as a forward-thinking and dedicated engineer.
        </p>
      </div>
    </motion.div>
  );
}

export default Content;
