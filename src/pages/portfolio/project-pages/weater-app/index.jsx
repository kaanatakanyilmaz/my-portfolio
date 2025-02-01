import { motion } from "framer-motion";
import { Github } from "lucide-react";

function WeaterApp() {
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
            React Weather App
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-15 leading-8 text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[280px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                -- This project is a simple weather application developed using
                React. Users can enter a city name to retrieve real-time weather
                information for that location.
              </p>
              <div className="flex items-center gap-5 my-5">
                <span>-- GitHub Repository: </span>
                <a
                  href="https://github.com/kaanatakanyilmaz/react-weater-app"
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
                  <span className="font-bold">-- Redux Toolkit:</span> Chosen to
                  simplify state management in the project.
                </li>
                <li>
                  <span className="font-bold">-- React Redux:</span> A binding
                  library used to integrate Redux with React.
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
                <li>
                  <span className="font-bold">-- State Management:</span>{" "}
                  Powerful and scalable state management with Redux Toolkit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WeaterApp;
