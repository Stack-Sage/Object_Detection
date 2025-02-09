"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { clsx } from "clsx";
import { 
  FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaYoutube, 
  FaSnapchatGhost, FaLinkedinIn, FaTiktok, FaTelegramPlane, 
  FaPinterestP, FaSpotify, FaDiscord, FaRedditAlien, 
  FaGooglePlusG, FaSkype, FaLine ,FaGithub
} from "react-icons/fa";

const socialButtons = [
  { id: "facebook", icon: <FaFacebookF />, color: "blue-600", tooltip: "Facebook" },
  { id: "instagram", icon: <FaInstagram />, color: "pink-500", tooltip: "Instagram" },
  { id: "whatsapp", icon: <FaWhatsapp />, color: "green-600", tooltip: "WhatsApp" },
  { id: "twitter", icon: <FaTwitter />, color: "blue-400", tooltip: "Twitter" },

  { id: "linkedin", icon: <FaLinkedinIn />, color: "blue-500", tooltip: "LinkedIn" },

  { id: "telegram", icon: <FaTelegramPlane />, color: "blue-400", tooltip: "Telegram" },
  { id: "Github", icon: <FaGithub/>, color: "red-500", tooltip: "GitHub" },

  
  { id: "reddit", icon: <FaRedditAlien />, color: "yellow-600", tooltip: "Reddit" },
  
  
  
];

const Social = () => {
  return (
    <div className="flex w-auto h-auto item-center justify-center bg-gray-900 ring-1 hover:ring-2 rounded-md duration-200 p-8 ">
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {socialButtons.map(({ id, icon, color, tooltip }) => (
          <Tippy key={id} content={tooltip} animation="fade" delay={[200, 200]}>
            <button
              id={id}
              aria-label={tooltip}
              className={clsx(
                "bg-transparent shadow-md shadow-blue-400 w-12 h-12 rounded-full text-2xl flex items-center justify-center transition-all duration-500 transform hover:-translate-y-2",
                `  hover:bg-sky-600 hover:border-black text-blue-400   hover:text-black`
              )}
            >
              {icon}
            </button>
          </Tippy>
        ))}
      </div>
    </div>
  );
};

export default Social;
