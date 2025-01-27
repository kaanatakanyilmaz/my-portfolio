import React from "react";

import ContentLeft from "./content-left";
// import ContentRight from "./content-right";
function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#f2f1fb]  justify-center items-center gap-5 sm:gap-40  border-b-3 border-[#15202b] ">
      <div className=" ml-5 flex-2">
        <ContentLeft />
        <ContentLeft />
      </div>
      {/* <div className=" mr-5 flex-1">
        <ContentRight />
      </div> */}
    </div>
  );
}

export default Home;
