import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ContentLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full sm:mb-14 "
    >
      <div className="flex flex-col  items-center">
        <Link
          to={"/my-portfolio"}
          className=" lg:mr-4 leading-8  font-medium p-5 mt-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] shadow-lg text-left w-[250px] sm:w-[500px]  md:w-[700px]   "
        >
          <div>
            <div className="flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="w-5 h-5">
                <path
                  fill="#15202b"
                  d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                ></path>
              </svg>

              <p className="text-[#15202b]"> my-portfolio</p>
            </div>
            <p className="text-[#455769]">
              A personal CV site prepared with React.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-4 w-4 rounded-full bg-[#f1e05a]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">JavaScript</p>
              <span className="h-4 w-4 rounded-full bg-[#663399]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">CSS</p>
              <span className="h-4 w-4 rounded-full bg-[#e34c26]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">HTML</p>
            </div>
          </div>
        </Link>
        <Link
          to={"/admin-dashboard"}
          className=" lg:mr-4 leading-8  font-medium p-5 mt-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] shadow-lg text-left w-[250px] sm:w-[500px]  md:w-[700px]   "
        >
          <div>
            <div className="flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="w-5 h-5">
                <path
                  fill="#15202b"
                  d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                ></path>
              </svg>

              <p className="text-[#15202b]">React-Admin-Dashboard</p>
            </div>
            <p className="text-[#455769]">
              An Admin Dashboard front-end operation developed with React.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-4 w-4 rounded-full bg-[#f1e05a]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">JavaScript</p>
            </div>
          </div>
        </Link>
        <Link
          to={"/redux-toolkit"}
          className=" lg:mr-4 leading-8  font-medium p-5 mt-6 rounded-2xl bg-[#f9f9f9] hover:bg-[#f5f5f5] shadow-lg text-left w-[250px] sm:w-[500px]  md:w-[700px]   "
        >
          <div>
            <div className="flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="w-5 h-5">
                <path
                  fill="#15202b"
                  d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                ></path>
              </svg>

              <p className="text-[#15202b]">reduxtoolkit-calisma</p>
            </div>
            <p className="text-[#455769]">
              A React & Redux Toolkit counter app for learning.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-4 w-4 rounded-full bg-[#f1e05a]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">JavaScript</p>
              <span className="h-4 w-4 rounded-full bg-[#663399]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">CSS</p>
              <span className="h-4 w-4 rounded-full bg-[#e34c26]"></span>
              <p className="text-[#15202b] text-xs sm:text-base">HTML</p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default ContentLeft;
