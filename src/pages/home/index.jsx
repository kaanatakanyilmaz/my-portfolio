import React from "react";
import Content from "./content";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#f2f1fb]  justify-center items-center gap-5 sm:gap-40  border-b-3 border-[#15202b] ">
      <div className=" ml-5 ">
        <Content />
      </div>
    </div>
  );
}

export default Home;
