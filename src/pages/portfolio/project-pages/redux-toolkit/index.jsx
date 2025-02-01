import { motion } from "framer-motion";
import { Github } from "lucide-react";

function ReduxToolKit() {
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
            Redux Toolkit Counter Project
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-15 leading-8 text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[280px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                This project demonstrates how to build a basic counter
                application using Redux Toolkit. The application allows
                incrementing and decrementing a number while showcasing global
                state management with Redux Toolkit.
              </p>
              <div className="flex items-center gap-5 my-5">
                <span>-- GitHub Repository: </span>
                <a
                  href="https://github.com/kaanatakanyilmaz/react-reduxtoolkit-calisma"
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
              <ul>
                <li>
                  <span className="font-bold">-- React:</span> For building the
                  user interface
                </li>
                <li>
                  <span className="font-bold">-- Redux Toolkit:</span> For state
                  management
                </li>
              </ul>

              <ul>
                <li>
                  <span className="font-bold">-- React Redux </span> To
                  integrate Redux with React.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ReduxToolKit;
