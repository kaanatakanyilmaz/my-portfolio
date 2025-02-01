import React from "react";

import { motion } from "framer-motion";

import {
  Cake,
  CodeXml,
  Mail,
  Github,
  Building2,
  University,
  Phone,
  LaptopMinimal,
} from "lucide-react";

function ContentLeft() {
  const handleDownloadCV = () => {
    const pdfUrl = "/pdf/Kaan_Atakan_Yilmaz_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kaan_Atakan_Yilmaz_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadCL = () => {
    const pdfUrl = "/pdf/cover-letter.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kaan_Atakan_Yilmaz_Cover_Letter.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center text-[#15202b]  ">
        <div className="leading-8 text-lg font-medium p-3 sm:p-6 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg  w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[900px] max-w-[900px]">
          <ul className="text-[10px] sm:text-sm lg:text-lg">
            <div className="flex flex-col md:flex-row justify-between p-8">
              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row items-center">
                  <Cake className="text-[#ff7a00] sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className=" ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  ">Birthday :</span>
                    <span className="ml-3 text-[#747171]">29 May 2001</span>
                  </li>
                </div>

                <div className="flex flex-col sm:flex-row  items-center">
                  <CodeXml className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className=" ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Departman :</span>
                    <span className="ml-3 text-[#747171]">
                      Computer Engineer
                    </span>
                  </li>
                </div>

                <div className="flex flex-col sm:flex-row  items-center">
                  <Mail className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Email :</span>
                    <span className="ml-3 text-[#747171] ">
                      yilmazkaanatakan@gmail.com
                    </span>
                  </li>
                </div>

                <div className="flex flex-col sm:flex-row  items-center">
                  <Github className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Github :</span>
                    <span className="ml-3 text-[#747171]">
                      github.com/kaanatakanyilmaz
                    </span>
                  </li>
                </div>
              </div>
              <div className="flex flex-col  ">
                <div className="flex flex-col sm:flex-row  items-center">
                  <Building2 className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> City :</span>
                    <span className="ml-3 text-[#747171]">
                      İstanbul / Giresun / Düzce
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row  items-center  ">
                  <University className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> University :</span>
                    <span className="ml-3 text-[#747171]">
                      Duzce University
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row items-center ">
                  <Phone className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Phone :</span>
                    <span className="ml-3 text-[#747171]">
                      +90 536 054 0090
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row items-center">
                  <LaptopMinimal className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className=" ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Frelance / Remote :</span>
                    <span className="ml-3 text-[#747171]">Available</span>
                  </li>
                </div>
              </div>
            </div>
          </ul>

          <div className="flex flex-row items-center gap-3 ">
            <button
              onClick={handleDownloadCV}
              className=" font-bold  bg-[#15202b]  text-white  text-xs  sm:text-xl py-1 px-5 md:py-2 md:px-10 lg:py-3 lg:px-10 border-3 hover:border-[#ff7a00] hover:bg-[#23313f] rounded-2xl shadow-lg
              "
            >
              Download CV
            </button>
            <button
              onClick={handleDownloadCL}
              className=" font-bold  bg-[#15202b]  text-white text-xs  sm:text-xl py-1 px-5 md:py-2 md:px-10 lg:py-3 lg:px-10 border-3 hover:border-[#ff7a00] hover:bg-[#23313f] rounded-2xl shadow-lg
              "
            >
              Download Cover Letter
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContentLeft;
