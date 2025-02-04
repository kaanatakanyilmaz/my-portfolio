import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col mb-14 "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          Experience
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        <div className=" lg:mr-4 leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center ">
            <BriefcaseBusiness size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">2024</h1>
          </div>

          <h1 className="text-lg font-bold p-2">
            Eteration Bilisim Cozumleri Ticaret A.S. - Software Developer Intern
          </h1>
          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            Gained hands-on experience in Agile methodologies, actively
            contributing to projects following Scrum and Kanban frameworks.
            Developed skills in project management, teamwork, and collaborative
            software development. Designed and developed a user-friendly and
            interactive web application using React, enhancing the user
            experience with modern UI/UX principles. Additionally, contributed
            to an in-house mobile application project using React Native,
            ensuring smooth performance and functionality for end users. Engaged
            in code reviews, debugging, and performance optimization, while
            following best practices for scalable and maintainable front-end
            development.
          </p>
        </div>
        <div className=" leading-8  font-medium p-3 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
          <div className="flex flex-row  items-center ">
            <BriefcaseBusiness size={30} className="ml-2 text-[#ff7a00]" />
            <h1 className="text-lg font-bold ml-3 ">2022</h1>
          </div>

          <h1 className="text-lg font-bold p-2">
            OFİ Tarım Sanayi Ticaret A.Ş. - Intern
          </h1>
          <p className="font-medium text-sm sm:text-lg text-[#15202b] p-3 leading-relaxed  text-left">
            I successfully completed my mandatory internship at OFİ Tarım Sanayi
            Ticaret A.Ş. within the specified period. During this time, I had
            the opportunity to gain insights into hardware-related processes and
            observe industry practices. This experience helped me enhance my
            problem-solving approach and provided a broader perspective on
            technology in the agricultural sector.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
