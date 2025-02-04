import React from "react";
import Experience from "./experience";
import Education from "./education";
import MySkills from "./my-skills";
function Skills() {
  return (
    <div className=" bg-[#f2f1fb]  px-0 sm:px-20  flex-col justify-center items-center  border-b-3 border-[#15202b]">
      <Education />
      <Experience />
      <MySkills />
    </div>
  );
}

export default Skills;
