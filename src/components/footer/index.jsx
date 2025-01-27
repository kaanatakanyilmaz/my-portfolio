import React from "react";
import { Linkedin, Github, Instagram, Facebook, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="  shadow-md bg-gray-800 text-white py-3 px-4">
      <div className=" text-center">
        <p className="mb-5">© 2025 Kaan Atakan Yilmaz All Rights Reserved.</p>
        <div className="flex justify-center gap-6">
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
              <Github className="" size={40} />
            </div>
          </a>
          <a href="https://x.com/kaatakann" target="_blank" className="text-lg">
            <div className=" hover:bg-[#000]  rounded-lg p-2">
              <FontAwesomeIcon icon={faXTwitter} className="text-[40px]" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/wakoonn/"
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
    </footer>
  );
}

export default Footer;
