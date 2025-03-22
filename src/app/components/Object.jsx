"use client";

import { useDetections } from "../context/DetectionsContext";

export default function DetectionLogs() {
  const { detections, calculateOverallThreat } = useDetections();
  const overallThreat = calculateOverallThreat(detections);

  return (
    <div className="p-4 ring-1 hover:ring-2 transition duration-200 rounded-md shadow bg-transparent">
      <h2 className="text-xl font-bold mb-4 flex justify-between">
        Detection Logs
        <span
          className={`px-3 py-1 rounded-lg text-sm font-bold ${
            overallThreat === "High"
              ? "bg-red-600 text-white animate-pulse"
              : overallThreat === "Medium"
              ? "bg-yellow-500 text-black"
              : "bg-emerald-600 text-white"
          }`}
        >
          Overall Threat: {overallThreat}
        </span>
      </h2>

      <ul className="space-y-3 max-h-[400px] shadow-sm transition-transform duration-200 rounded-md p-1 shadow-blue-600 hover:shadow-md hover:shadow-blue-500 overflow-y-auto">
        {detections.length > 0 ? (
          detections
            .slice()
            .reverse()
            .map((log, index) => {
              const confidence = log.confidence !== undefined ? log.confidence.toFixed(0) + "%" : "Unknown";
              const date = log.time ? new Date(log.time) : new Date();
              const timeString = !isNaN(date.getTime())
                ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" , second: "2-digit"})
                : "Unknown Time";

              return (
                <li
                  key={index}
                  className="flex justify-between items-center p-1 rounded-lg transition-all duration-300 shadow-blue-400 hover:shadow-inner hover:shadow-blue-400 hover:scale-[1.01] scale-100"
                >
                  <div className="text-gray-300">
                    <p>
                      {timeString} — {log.class || "Unknown Object"}{" "}
                      <span className="text-white text-sm">({confidence})</span>
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-semibold uppercase rounded-full transition duration-300 transform active:scale-95 ${
                      log.threat_level === "High"
                        ? "bg-red-600 text-black animate-pulse"
                        : log.threat_level === "Medium"
                        ? "bg-yellow-600 text-black"
                        : "bg-emerald-600 text-black"
                    }`}
                  >
                    {log.threat_level} Threat
                  </span>
                </li>
              );
            })
        ) : (
          <p className="text-gray-300 text-center">No detections yet...</p>
        )}
      </ul>
    </div>
  );
}
