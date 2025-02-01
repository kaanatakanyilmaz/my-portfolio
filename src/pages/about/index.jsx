import React from "react";
import Content from "./content";
import ContentLeft from "./content/content-left";
import ContentRight from "./content/content-right";

function About() {
  return (
    <div className="bg-[#f2f1fb]  justify-center items-center border-b-3 border-[#15202b] px-20">
      <Content />
      <div className="flex flex-col xl:flex-row gap-30 justify-center">
        <div>
          <ContentLeft />
        </div>
        <div className="flex items-center justify-center lg:mb-4">
          <ContentRight />
        </div>
      </div>
    </div>
  );
}

export default About;
