import React from "react";
import { Linkedin, Github, Instagram, Facebook, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col  items-center  shadow-md bg-gray-800 text-white py-3 px-4"
    >
      <div className=" text-center">
        <p className="mb-5">© 2025 Kaan Atakan Yilmaz All Rights Reserved.</p>
        <div className="flex justify-center gap-0 sm:gap-3 md:gap-6">
          <a
            href="https://www.linkedin.com/in/kaan-atakan-yilmaz/"
            target="_blank"
            className="text-lg"
          >
            <div className="hover:bg-[#0a66c2]  rounded-lg p-2">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-[40px]" />
            </div>
          </a>
          <a
            href="https://github.com/kaanatakanyilmaz"
            target="_blank"
            className="text-lg"
          >
            <div className=" hover:bg-[#5968ba]  rounded-lg p-2">
              <Github className="text-[40px]" size={40} />
            </div>
          </a>
          <a href="https://x.com/kaatakann" target="_blank" className="text-lg">
            <div className=" hover:bg-[#000]  rounded-lg p-2">
              <FontAwesomeIcon icon={faXTwitter} className="text-[40px]" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/kaatakann/"
            target="_blank"
            className="text-lg"
          >
            <div className="hover:bg-gradient-to-tr from-yellow-400 via-pink-500  to-indigo-800  rounded-lg p-2">
              <Instagram className="" size={40} />
            </div>
          </a>
          <a
            href="https://x.com/https://www.facebook.com/kaanatakanyilmaz"
            target="_blank"
            className="text-lg"
          >
            <div className=" hover:bg-[#1877f2]  rounded-lg p-2">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className="text-[40px]"
              />
            </div>
          </a>

          <div className=" hover:bg-[#fff] hover:text-[#c5221f] rounded-lg p-2">
            <a href="mailto:yilmazkaanatakan@gmail.com" className="text-lg">
              <Mail size={40} />
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p>
            Passionate Frontend Developer, creating beautiful and interactive
            websites.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
