import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight, Github } from "lucide-react";

const images = [
  "https://raw.githubusercontent.com/kaanatakanyilmaz/React-Admin-Dashboard/refs/heads/main/images.png/1.png",
  "https://raw.githubusercontent.com/kaanatakanyilmaz/React-Admin-Dashboard/refs/heads/main/images.png/2.png",
  "https://raw.githubusercontent.com/kaanatakanyilmaz/React-Admin-Dashboard/refs/heads/main/images.png/3.png",
  "https://raw.githubusercontent.com/kaanatakanyilmaz/React-Admin-Dashboard/refs/heads/main/images.png/4.png",
];
function AdminDashboard() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="bg-[#f2f1fb]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-5 px-20 flex flex-col w-full  "
      >
        <div className="flex flex-col items-center lg:items-start gap-3 mt-4  ">
          <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
            React Admin Dashboard
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-5 sm:p-15 leading-relaxed text-base sm:text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                -- This project, a React admin dashboard was developed with a
                graphical layout tailored to meet the standards of a fully
                functional admin panel.
              </p>
              <div className="flex items-center gap-5 my-5">
                <span>-- GitHub Repository: </span>
                <a
                  href="https://github.com/kaanatakanyilmaz/React-Admin-Dashboard"
                  target="_blank"
                >
                  <div className="">
                    <Github className="bg-[#5968ba]  rounded-xl p-1 h-10 w-10 text-white" />
                  </div>
                </a>
              </div>
            </div>
            <h1 className="font-bold text-3xl mt-8">Technologies Used</h1>
            <div>
              <h2 className="font-bold text-2xl mt-5">Main Technologies</h2>
              <ul>
                <li>
                  <span className="font-bold">-- React:</span> A popular
                  JavaScript library for building user interfaces.
                </li>
                <li>
                  <span className="font-bold">-- Vite:</span> A fast and modern
                  build tool, also used as a development server.
                </li>
              </ul>
              <h2 className="font-bold text-2xl mt-5">Additional Libraries</h2>
              <ul>
                <li>
                  <span className="font-bold">-- React Router DOM:</span> Used
                  for handling navigation (routing) between pages.
                </li>
                <li>
                  <span className="font-bold">-- Framer Motion: </span>
                  This library adds smooth animations and transition effects,
                  making the application feel more dynamic and interactive.
                </li>
                <li>
                  <span className="font-bold">-- Recharts: </span>
                  Used to create charts and graphs, it helps users visualize
                  data and understand reports and statistics better.
                </li>
                <li>
                  <span className="font-bold">-- Classnames:</span> Provides
                  dynamic className management and simplifies CSS class merging.
                </li>
                <li>
                  <span className="font-bold">-- Lucide React: </span> Provides
                  modern and lightweight icons that are used throughout the
                  project for a polished look.
                </li>
              </ul>
              <h2 className="font-bold text-2xl mt-5">Features</h2>

              <ul>
                <li>
                  <span className="font-bold">-- Modern UI:</span> A clean and
                  modern user interface designed using React and TailwindCSS.
                </li>
                <li>
                  <span className="font-bold">-- Routing:</span> Multi-page
                  support with React Router.
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-col items-center p-15 lg:items-start gap-3 mt-4  ">
              <h1 className="font-bold text-[20px] text-[#15202b] md:text-[30px] text-center md:text-left">
                App Images
              </h1>
              <span className="w-26 h-2 bg-[#ff7a00] rounded-full "></span>
              <span className="w-18 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
            </div>

            <div className=" relative w-full max-w-7xl mx-auto mb-20">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    className="w-full h-auto"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/70 p-2 rounded-full shadow-lg "
              >
                <CircleChevronLeft className="text-[#ff7a00]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/20 hover:bg-white/70 p-2 rounded-full shadow-lg"
              >
                <CircleChevronRight className="text-[#ff7a00]" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminDashboard;
