"use client";
import React, { useState } from "react";

const CameraControl = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
    // for now we are gonna use this until the api is generated .
  };
  return (
    <div className=" p-4 ring-1 hover:ring-2 transition duration-200 items-center flex justify-center  rounded-md flex-col">
      <button
        onClick={toggleCamera}
        className={` mt-2 px-10 py-4 text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90 `}
      >
        {isCameraOn ? "Turn OFF Camera" : "Turn ON Camera"}
      </button>
      <button
        onClick={() => console.log("Captured Photo")}
        className={` mt-2 px-10 py-4 text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90 `}
      >
        Capture Photo
      </button>
    </div>
  );
};

export default CameraControl;
