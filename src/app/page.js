import Image from "next/image";
import Object from "./components/Object";
import ObjectCount from "./components/ObjectCount";
import CameraControl from "./components/CameraControl";
import ObjectGraph from "./components/ObjectGraph";
import { speak } from "./components/speak";
import Insights from "./components/Insights";
import LiveCameraFeed from "./components/LiveCamera";

import ExportButtons from "./components/ExportButton";
import DetectionLogs from "./components/DetectionLogs";
import ObjectTracking from "./components/ObjectTracking";
import AISummary from "./components/Summary";
import DistanceDisplay from "./components/DistanceDisplay";
import Social from "./components/Social";
import Navbar from './components/Navbar'

export default function Home() {
  const handleDetection = () => {
    speak("Object Detected");
  };

  return (
    <main className=" flex  min-h-screen flex-col items-center p-6 bg-gradient-to-tr from-blue-950 via-black to-slate-950 ">
      {/* 
  <h1 id="text-shadow" className=" m-4 " >
    Object Detection
  </h1> */}

      <div className="shadow-sm shadow-sky-900 hover:shadow-md hover:shadow-sky-800 transistion duration-200 fixed top-0 w-full overflow-hidden z-20 ">
          <Navbar/>
      </div>

      <div className="bg-gradient-to-br from-cyan-950 via-blue-300 to-cyan-950 bg-clip-text p-2 text-transparent hover:brightness-110 hover:contrast-150 transistion duration-300 contrast-125 lg:grid-cols-3 md:grid-cols-2  text-sky-300 grid gap-3  shadow-blue-400 mt-12   z-10">
        <LiveCameraFeed />
        <CameraControl />
        <ObjectCount />
        <Object />
        <ObjectGraph />
        <Insights />
        <DistanceDisplay />

        <AISummary />
        <DetectionLogs />
        <ObjectTracking />
        <ExportButtons />
        <Social/>
        
        
      </div>
    </main>
  );
}
