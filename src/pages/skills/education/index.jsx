import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full mb-14 "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          Education
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>
      <div className="flex justify-center">
        <div className=" leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center ">
            <GraduationCap size={35} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">2019-2024</h1>
          </div>
          <h1 className="text-lg font-bold p-2">
            Düzce University – Bachelor's Degree in Computer Engineering
          </h1>
          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left ">
            I pursued my Bachelor's degree in Computer Engineering at Düzce
            University, where I gained a strong foundation in both theoretical
            and practical aspects of the field. Throughout my studies, I
            explored key areas such as algorithms, data structures, web
            development, software engineering, and artificial intelligence. The
            curriculum provided hands-on experience through various projects,
            allowing me to apply my knowledge to real-world scenarios.
            Additionally, I developed problem-solving skills and a deep
            understanding of computational logic, which have been instrumental
            in shaping my approach to software development.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
