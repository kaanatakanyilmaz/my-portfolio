import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContentLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col  items-center mt-12"
    >
      <div className="flex flex-col items-center leading-20">
        <h1 className="  text-[50px] font-medium text-[#15202]"> Hello, </h1>
        <div className="flex flex-row items-center ">
          <h1 className="  text-[50px] text-[#15202]">My name is</h1>
          <h1 className="font-extrabold text-[70px] text-[#ff7a00] ml-6">
            Kaan Atakan
          </h1>
        </div>
        <TypeAnimation
          className="font-bold text-[40px] text-[#15202b] max-w-[90%] text-center"
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
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="flex flex-col items-center mt-10 mb-10">
          <p className="leading-8 text-lg font-medium p-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-center w-300">
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

export default ContentLeft;
