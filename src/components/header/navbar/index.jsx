import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  House,
  User,
  FolderClosed,
  BriefcaseBusiness,
  MessagesSquare,
} from "lucide-react";

function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" relative group font-bold  text-[#15202b] text-xl flex flex-col sm:flex-row justify-center items-center">
        <Link
          to={"/"}
          className="ml-10 hover:text-[#ff7a00] hover:border-b-[2px]"
        >
          <div className="flex items-center">
            <House size={30} />
            <span className="ml-1">Home</span>
          </div>
        </Link>
        <Link
          to={"/about"}
          className="ml-6 hover:text-[#ff7a00] hover:border-b-[2px]"
        >
          <div className="flex items-center">
            <User size={30} />
            <span className="ml-1">About</span>
          </div>
        </Link>
        <Link
          to={"/skills"}
          className="ml-6 hover:text-[#ff7a00] hover:border-b-[2px]"
        >
          <div className="flex items-center">
            <BriefcaseBusiness size={30} />
            <span className="ml-1"> Skills</span>
          </div>
        </Link>
        <Link
          to={"/projects"}
          className="ml-6 hover:text-[#ff7a00] hover:border-b-[2px]"
        >
          <div className="flex items-center">
            <FolderClosed size={30} />
            <span className="ml-1">Portfolio</span>
          </div>
        </Link>
        <Link
          to={"contact"}
          className="ml-6 hover:text-[#ff7a00] hover:border-b-[2px]"
        >
          <div className="flex items-center">
            <MessagesSquare size={30} />
            <span className="ml-1">Contact</span>
          </div>
        </Link>
        <span className="absolute w-5 h-5 border-b-[5px] border-l-[5px]  border-[#ff7a00] top-10 -left-5 "></span>
        <span className="absolute w-5 h-5 border-t-[5px] border-r-[5px] border-[#ff7a00] -top-10 -right-10  "></span>
      </div>
    </motion.div>
  );
}

export default NavBar;
