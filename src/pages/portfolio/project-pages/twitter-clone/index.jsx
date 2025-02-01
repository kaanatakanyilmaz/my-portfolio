import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight, Github } from "lucide-react";

const images = [
  "https://private-user-images.githubusercontent.com/135030679/402141682-7ab03b3d-3754-4f77-8cc1-1f555573c5d8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzNTA4MjIsIm5iZiI6MTczODM1MDUyMiwicGF0aCI6Ii8xMzUwMzA2NzkvNDAyMTQxNjgyLTdhYjAzYjNkLTM3NTQtNGY3Ny04Y2MxLTFmNTU1NTczYzVkOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQxOTA4NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MGEzMzQ3M2M3ZmEwMjU5MThjODY5YjFiZDVkYTk5MzVlMTkxOGRiMGJhNmQwY2FjNzA1MDdkODI1N2ZmZjVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ym00nUZDz5YEw3au-Mv0ct62uoJ6fyUXLFl41Gjw894",
  "https://private-user-images.githubusercontent.com/135030679/402142005-c1714249-6051-4b51-97ac-213bae6871e2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzNTA4MjIsIm5iZiI6MTczODM1MDUyMiwicGF0aCI6Ii8xMzUwMzA2NzkvNDAyMTQyMDA1LWMxNzE0MjQ5LTYwNTEtNGI1MS05N2FjLTIxM2JhZTY4NzFlMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQxOTA4NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZmExZWQxNGYzYzI2NjZhZWUwNGNjMmIxNzY0ZDVhYWI2OTE0YjhjYWM3NGIwYTA3MjI1ZWEyYWUyNzhkMTA2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SOtz3wskg4ejYEW05SoDYS65UvhqbfvjTENPdlb7TD0",
  "https://private-user-images.githubusercontent.com/135030679/402142129-9ae1a876-bada-416f-a30f-fac63950db97.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzNTA4MjIsIm5iZiI6MTczODM1MDUyMiwicGF0aCI6Ii8xMzUwMzA2NzkvNDAyMTQyMTI5LTlhZTFhODc2LWJhZGEtNDE2Zi1hMzBmLWZhYzYzOTUwZGI5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQxOTA4NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYjJiNWYyYzI3ZTI3ODY1YzU0NDM5ZTk0MDUwNTFiNDJhNDA3NGYyMmM2M2Y5NzlmOGE0Yjg0Y2UwMTFmZjA2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LixOjx4eDB2zjLWDcq-BnWdc9L28Pxnja8h-iC1L9w0",
  "https://private-user-images.githubusercontent.com/135030679/402143163-d8a938cf-f907-40c4-9aa9-bcbd5f267c7b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzNTA4MjIsIm5iZiI6MTczODM1MDUyMiwicGF0aCI6Ii8xMzUwMzA2NzkvNDAyMTQzMTYzLWQ4YTkzOGNmLWY5MDctNDBjNC05YWE5LWJjYmQ1ZjI2N2M3Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQxOTA4NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZmE3NmViODUxMDA5NDZlNzI3Yzc4NmMyYzYwYjUwMDg3MDJjZWQyMGQ3M2RkZTM4ODc0MzI5YjdiNTk4MWExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NeE8itTLqW3J5mfmttsqQh4h7_fGPh1RMjxwRiWo_28",
  "https://private-user-images.githubusercontent.com/135030679/402143412-deb8de79-092e-4f77-94a2-3b24162401dd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzgzNTA4MjIsIm5iZiI6MTczODM1MDUyMiwicGF0aCI6Ii8xMzUwMzA2NzkvNDAyMTQzNDEyLWRlYjhkZTc5LTA5MmUtNGY3Ny05NGEyLTNiMjQxNjI0MDFkZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEzMVQxOTA4NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODQ2NjI1MTdhZjhiNjFiYTI4M2MyMmVmZGExMTU2ZDczZWIwODU4ZjFkMWZkMDFhZWUxYzM4NWNlNDc5Nzk4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Y4fMt1WhNyH4iHQD9g9K3NX70GFQrom-ahZ1k5wcHVI",
];
function TwitterClone() {
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
            React Twitter Clone
          </h1>
          <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
          <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
        </div>
        <div className="flex flex-col justify-center   items-center">
          <div className="text-[#15202b] p-15 leading-8 text-lg font-medium  mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg text-left w-[280px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1800px]">
            <div className="">
              <p>
                -- This project was developed as a clone that includes the core
                functionalities of a Twitter-like social media platform. It was
                built using React and Vite with an optimized structure and
                designed in accordance with modern web development principles.
              </p>
              <div className="flex items-center gap-5 my-5">
                <span>-- GitHub Repository: </span>
                <a
                  href="https://github.com/kaanatakanyilmaz/react-twitter-clone?tab=readme-ov-file"
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
                  <span className="font-bold">-- Redux Toolkit:</span> Chosen to
                  simplify state management in the project.
                </li>
                <li>
                  <span className="font-bold">-- React Redux:</span> A binding
                  library used to integrate Redux with React.
                </li>
                <li>
                  <span className="font-bold">-- Classnames:</span> Provides
                  dynamic className management and simplifies CSS class merging.
                </li>
                <li>
                  <span className="font-bold">-- Prop Types:</span> Used for
                  type-checking props passed to components.
                </li>
              </ul>
              <h2 className="font-bold text-2xl mt-5">Development Tools</h2>
              <ul>
                <li>
                  <span className="font-bold">
                    @types/react ve @types/react-dom:
                  </span>
                  Contains type definitions required for using React with
                  TypeScript.
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
                <li>
                  <span className="font-bold">-- Theme Support:</span> Three
                  different theme modes (Dim, Light, Dark) have been added.
                  Users can select their preferred theme for a personalized
                  experience.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center p-15 lg:items-start gap-3 mt-4  ">
            <h1 className="font-bold text-[20px] text-[#15202b] md:text-[30px] text-center md:text-left">
              App Images
            </h1>
            <span className="w-26 h-2 bg-[#ff7a00] rounded-full "></span>
            <span className="w-18 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
          </div>

          <div className="relative w-full max-w-4xl mx-auto mb-20">
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
      </motion.div>
    </div>
  );
}

export default TwitterClone;
