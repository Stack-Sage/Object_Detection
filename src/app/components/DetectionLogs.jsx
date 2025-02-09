'use client'

import { useState } from "react";

export default function DetectionLogs() {
  const [logs, setLogs] = useState([
    { time: "12:05 PM", object: "Person", movement: "Static", threat: "Low" },
    { time: "12:06 PM", object: "Knife", movement: "Moving", threat: "High" },
    { time: "12:07 PM", object: "Car", movement: "Moving", threat: "Low" },
  ]);

  return (
    <div className="p-4  ring-1 hover:ring-2 transition duration-200  rounded-md  shadow">
      <h2 className="text-xl font-bold mb-2">Detection Logs</h2>
      <ul className="space-y-1">
        {logs.map((log, index) => (
          <li key={index} className="flex justify-between">
            <span>{log.time} - {log.object} ({log.movement})</span>
            <span className={`px-2 py-1  w-fit h-fit  text-md font-bold uppercase text-black bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 ring-1 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90  ${log.threat === "High" ? "bg-indigo-600 text-black" : "bg-emerald-600 text-black"}`}>
              {log.threat} Threat
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
