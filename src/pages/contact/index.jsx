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
  ContactRound,
  LaptopMinimal,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col w-full bg-[#f2f1fb] "
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4 px-20 ">
        <h1 className="font-bold text-[30px] text-[#15202b] md:text-[40px] text-center md:text-left">
          Contact
        </h1>
        <span className="w-32 h-2 bg-[#ff7a00] rounded-full "></span>
        <span className="w-24 h-2 ml-0  bg-[#ff7a00] rounded-full text-center"></span>
      </div>

      <div className="flex flex-col justify-center items-center text-[#15202b] mb-27  ">
        <div className="leading-8 text-lg font-medium p-3 sm:p-6 mt-6 rounded-2xl bg-[#f9f9f9] shadow-lg  w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[900px] max-w-[900px]">
          <ul className="text-[10px] sm:text-sm lg:text-lg">
            <div className="flex flex-col md:flex-row justify-between p-8">
              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row  items-center">
                  <ContactRound className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Name:</span>
                    <span className="ml-3 text-[#747171] ">
                      Kaan Atakan Yılmaz
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
                  <Building2 className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> City :</span>
                    <span className="ml-3 text-[#747171]">
                      İstanbul / Giresun / Düzce
                    </span>
                  </li>
                </div>
              </div>
              <div className="flex flex-col  ">
                <div className="flex flex-col sm:flex-row  items-center  ">
                  <University className="text-[#ff7a00]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> University :</span>
                    <span className="ml-3 text-[#747171]">
                      Duzce University
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row  items-center  ">
                  <div className="rounded-lg ">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className=" text-[20px] text-[#ff7a00]"
                    />
                  </div>
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  "> Linkedin :</span>
                    <span className="ml-3 text-[#747171]">
                      linkedin/kaan-atakan-yilmaz
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
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
