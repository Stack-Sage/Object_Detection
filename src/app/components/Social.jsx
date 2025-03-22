"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { clsx } from "clsx";
import { 
  
  FaLinkedinIn, FaUser, FaGithub
} from "react-icons/fa";

const socialButtons = [

 

  { id: "linkedin", icon: <FaLinkedinIn />, color: "blue-500", tooltip: "LinkedIn", link: "https://www.linkedin.com/in/adarsh-pathania177/" },
  
  { id: "github", icon: <FaGithub />, color: "gray-800", tooltip: "GitHub", link: "https://github.com/Stack-Sage" },
  { id: "Portfolio", icon: <FaUser/>, color: "yellow-600", tooltip: "Portfolio", link: "https://adarsh-v1.onrender.com" },
];

const Social = () => {
  return (
    <div className="flex w-auto h-auto item-center justify-center bg-gray-900 ring-1 hover:ring-2 rounded-md duration-200 p-8">
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {socialButtons.map(({ id, icon, color, tooltip, link }) => (
          <Tippy key={id} content={tooltip} animation="fade" delay={[200, 200]}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12"
            >
              <button
                id={id}
                aria-label={tooltip}
                className={clsx(
                  "bg-transparent shadow-md shadow-blue-400 w-12 h-12 rounded-full text-2xl flex items-center justify-center transition-all duration-500 transform hover:-translate-y-2",
                  `hover:bg-sky-600 hover:border-black text-blue-400 hover:text-black`
                )}
              >
                {icon}
              </button>
            </a>
          </Tippy>
        ))}
      </div>
    </div>
  );
};

export default Social;
