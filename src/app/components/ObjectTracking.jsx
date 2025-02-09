'use client'

import { useState } from "react";

export default function ObjectTracking() {
  const [trackedObjects, setTrackedObjects] = useState([
    { object: "Person", status: "Static" },
    { object: "Knife", status: "Moving" },
  ]);

  return (
    <div className="p-4  ring-1 hover:ring-2 transition duration-200  rounded-md text-sky-300 shadow">
      <h2 className="text-xl font-bold mb-2">Object Tracking</h2>
      <ul className="space-y-1">
        {trackedObjects.map((obj, index) => (
          <li key={index} className="flex justify-between">
            <span>{obj.object}</span>
            <span className={`px-2 py-1  w-fit h-fit  text-md font-bold uppercase text-black bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 ring-1 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(45,213,250)] active:scale-90   ${obj.status === "Moving" ? "bg-indigo-500 text-black" : "bg-sky-600 text-black"}`}>
              {obj.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
