import Image from "next/image";
import Object from "./components/Object";
import ObjectGraph from "./components/ObjectGraph";

import Insights from "./components/Insights";

import ExportButtons from "./components/ExportButton";

import Social from "./components/Social";
import Navbar from "./components/Navbar";

export default function Home() {
  const handleDetection = () => {
    speak("Object Detected");
  };

  return (
    <main className=" flex  min-h-screen flex-col items-center  bg-gradient-to-tr from-blue-950 via-black to-slate-950 ">
      {/* 
  <h1 id="text-shadow" className=" m-4 " >
    Object Detection
  </h1> */}

      <div className="shadow-sm shadow-sky-900 hover:shadow-md hover:shadow-sky-800 transistion duration-200 fixed  top-0 w-full overflow-hidden z-20 ">
        <Navbar />
      </div>

      <div className="bg-gradient-to-br p-6 pt-10 from-cyan-950 via-blue-300 to-cyan-950 bg-clip-text text-transparent hover:brightness-110 hover:contrast-125 transistion duration-300 contrast-125   grid-cols-1  text-sky-300 grid gap-6 md:w-[90%] lg:w-[85%] sm:w-[95%] shadow-blue-400 mt-12    z-10  shadow-xl ">
        <div className="grid grid-row-[1fr] min-h-96 lg:grid-cols-[2fr] gap-2  shadow-md hover:shadow-blue-600 ">
          <Object />
        </div>

        <div className="grid grid-row-[1fr] lg:grid-cols-[1fr] gap-2  shadow-md hover:shadow-blue-500">
          <ObjectGraph />
        </div>
        <div className="grid gap-3  shadow-md hover:shadow-blue-500">
          <Insights />
        </div>

        <div className="grid md:grid-cols-[2fr_2fr] grid-row-[2fr_2fr] lg:grid-cols-[2fr_2fr] gap-2 shadow-md hover:shadow-blue-500 ">
          <ExportButtons />
          <Social />
        </div>
      </div>
    </main>
  );
}
