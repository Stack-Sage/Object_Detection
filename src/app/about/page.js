import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Navbar (Fixed at the top) */}
      <div className="shadow-sm shadow-sky-900 hover:shadow-md hover:shadow-sky-800 transition duration-200 fixed top-0 w-full z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="p-6 gap-4 pt-20 text-white bg-gradient-to-tr from-blue-950 via-black to-slate-950 w-screen min-h-screen flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          🚀 Object Detection AI
        </h1>

        {/* Introduction */}
        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-center">
          Object Detection AI is a smart vision system that detects, tracks, and analyzes objects in real-time using **YOLO (You Only Look Once)** and **deep learning**. 
          Perfect for **security, automation, and AI-powered insights.** 🔍⚡
        </p>

        {/* Features Section */}
        <div className="mt-6 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold text-sky-400">✨ Key Features</h2>
          <ul className="mt-3 space-y-3 text-gray-300">
            <li>🎯 **Real-Time Object Detection** – Identify objects instantly using AI.</li>
            <li>🔄 **Object Tracking** – Track moving/static objects with live updates.</li>
            <li>📜 **Detection Logs & History** – View previous detections with timestamps.</li>
            <li>🚨 **Threat Level Detection** – Recognizes knives, guns, and other threats.</li>
            <li>📝 **AI Summary** – Generates insights based on detected objects.</li>
            <li>📊 **Export Data** – Download logs as CSV/JSON for further analysis.</li>
            <li>🎥 **Live Camera Feed** – Seamless live video display with overlays.</li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div className="mt-8 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold text-blue-400">🛠 Use Cases</h2>
          <p className="mt-3 text-gray-300">
            - 🏢 **Security & Surveillance** – Detect suspicious objects in real-time.  
            - 🚗 **Autonomous Vehicles** – Helps in lane detection & obstacle avoidance.  
            - 📦 **Retail & Inventory** – Tracks stock levels & item recognition.  
            - 🏠 **Smart Home Automation** – AI-powered monitoring for home security.  
          </p>
        </div>

        {/* About the Developer */}
        <div className="mt-10 max-w-3xl w-full text-center">
          <h2 className="text-2xl font-semibold text-sky-400">👨‍💻 About the Developer</h2>
          <p className="mt-3 text-gray-300">
            Hey! I'm **Adarsh Pathania**, a **B.Tech CS (AI/ML) student** and a passionate web & AI developer.  
            With **4+ years in web development**, I build innovative and **AI-driven** projects.  
          </p>
          <p className="mt-3 text-gray-300">
            I'm also active on **LinkedIn**, where I share my projects and insights.  
            Let's connect! 👉 {" "}
            <a 
              href="https://www.linkedin.com/in/adarsh-pathania"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg">
            Rate it
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
