import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaTelegramPlane } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
// import Image from "next/image";
import { Menu, Dropdown, Button } from 'antd';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <img
        src="/images/girl.png"
        alt="avatasdasdasd ar"
        className="mx-auto border avatar"
        height="100px" 
        width="200px"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Roqaia</span> Alrfou
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Computer Engineer
      </p>
      {/* Resume */}
      <a
        href="https://drive.google.com/file/d/14H0tLpfclHwMUNTIem5OYrLfKwBrc6mC/view?usp=sharing"
        download="Roqaia Alrfou.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.youtube.com/channel/UCHoLm_quIjU2uXiL5S1IzCQ">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" color="#FF0000" />
        </a>
         <a href="mailto:qoraia97@gmail.com">
              <FcGoogle className="w-8 h-8 cursor-pointer"/>{" "}
            </a>
        <a href="https://www.linkedin.com/in/roqaia-alrfou-7b9468219/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" color="#0e76a8"/>
        </a>
        <a href="https://github.com/RoqaiaRF">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Amman, Jordan </span>
        </div>
        {/* <p className="my-2 "> qoraia97@gmail.com </p>
        <p className="my-2"> +96277693130</p> */}
      </div>

      {/* Email Button */}

      <p>Contact me </p>
      <div>
        <ul  className="contact-l">
        <p className="my-2 "> qoraia97@gmail.com </p>
        {/* <p className="my-2"> +96277693130</p> */}
          <li>
            <a href="https://t.me/RoqaiaRF">
              <FaTelegramPlane className="w-8 h-8 cursor-pointer" color="#229ED9" />{" "}
            </a> 
          </li>
          <li>
            {/* <a href="https://wa.me/+962799849386">
             <ImWhatsapp className="w-8 h-8 cursor-pointer" color="#25D366" />{" "}
            </a>
          </li>
          <li>
            {/* <a href="mailto:qoraia97@gmail.com">
              <FcGoogle className="w-8 h-8 cursor-pointer"/>{" "}
            </a> */}
          </li>

        </ul>
      </div>

      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
