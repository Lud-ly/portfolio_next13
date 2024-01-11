"use client";

import Image from "next/image";
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import ThemeSwitch from "../theme/theme-switch";

const Sidebar = () => {
  return (
    <>
      <Image
        src="/images/me.jpg"
        alt="avatar"
        height="100"
        width="100"
        className="mx-auto border rounded-full"
      />
      <h3 className="my-4 text-2xl font-bold italic">
        <span className="text-green-500">LUDOVIC</span> MOULY
      </h3>
      <p className="px-2 py-1 my-3 bg-white dark:bg-gray-900 rounded-md">
        DÉVELOPPEUR WEB & MOBILE
      </p>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
        <a href="https://gitlab.com/Ludo82">
          <AiFillGitlab className="w-8 h-8 cursor-pointer hover:text-green-500" />
        </a>
        <a href="https://www.linkedin.com/in/ludovic-mouly">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:text-green-500" />
        </a>
        <a href="https://www.github.com/onlivyou/liv_mobile">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:text-green-500" />
        </a>
      </div>

      {/* Contacts */}
      <div className="py-4 my-5 w-full bg-gray-100 dark:bg-gradient-to-l rounded-md from-gray-900 to-black">
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>MONTPELLIER, FRANCE </span>
        </div>
        <p className="my-2 "> moulycode@gmail.com </p>
        <p className="my-2"> 06.99.07.62.23 </p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2  bg-gray-100 rounded-full cursor-pointer dark:bg-gray-900 hover:scale-105 hover:text-green-500 mb-5"
        onClick={() => window.open("mailto:moulycode@gmail.com")}
        type="button"
      >
        CONTACT
      </button>
      {/* Email Button */}
      <a
        href="/pdf/LUDOVIC_MOULY.pdf"
        download="LUDOVIC_MOULY.pdf"
        className="w-8/12 px-2 py-2 bg-gray-100 rounded-full cursor-pointer dark:bg-gray-900 hover:scale-105 hover:text-green-500"
      >
        TÉLÉCHARGER LE CV
      </a>
      <div className="flex items-center justify-center px-5 py-2 my-14">
        <ThemeSwitch />
      </div>
    </>
  );
};

export default Sidebar;
