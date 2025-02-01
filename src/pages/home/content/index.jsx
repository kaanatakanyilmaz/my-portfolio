import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Content() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center mt-12"
    >
      <div className="flex flex-col items-center leading-20">
        <h1 className=" text-[30px] md:text-[50px] font-medium text-[#15202]">
          Hello,
        </h1>
        <div className="flex flex-row items-center ">
          <h1 className=" text-[20px] md:text-[50px] text-[#15202] font-bold md:font-normal">
            My name is
          </h1>
          <h1 className="font-extrabold text-[30px] md:text-[70px] text-[#ff7a00] ml-6">
            Kaan Atakan
          </h1>
        </div>
        <TypeAnimation
          className="font-bold text-[20px] md:text-[40px] text-[#15202b] max-w-[90%] text-center"
          sequence={[
            "I am a Frontend Developer.",
            1500,
            "I am a Computer Engineer.",
            1500,
            "I am a Designer.",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <div className="flex flex-col items-center mt-10 mb-10">
          <p className="leading-8 text-lg font-medium p-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-center w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1500px]">
            I have a curious, research-driven, and fast-learning personality. I
            love discovering new things and enjoy sharing my knowledge with
            others. If we work together, I’m confident that I’ll add value to
            your company and your team. While benefiting from your expertise,
            I’ll continue to grow myself, and together, we’ll achieve great
            things.
          </p>
          <Link
            to={"/about"}
            className="bg-[#15202b] text-xl rounded-2xl px-18 py-3 font-bold  text-white mt-5 shadow-lg hover:bg-[#23313f] border-3 hover:border-[#ff7a00]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Content;
