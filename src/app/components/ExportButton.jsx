"use client";

import { useDetections } from "../context/DetectionsContext";
import { useState, useEffect } from "react";

export default function ExportButtons() {
  const { detections } = useDetections();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (detections.length > 0) {
      const timestampedDetections = detections.map((det) => ({
        time: new Date().toLocaleString(),
        class: det.class,
        confidence: det.confidence.toFixed(2),
        threat_level: det.threat_level,
      }));
      setHistory((prev) => [...prev, ...timestampedDetections]);
    }
  }, [detections]);
  const exportData = (format) => {
    if (history.length === 0) {
      alert("No detection data available to export.");
      return;
    }
  
    let dataStr = "";
    if (format === "json") {
      dataStr = JSON.stringify(history, null, 2);
    } else {
     
      dataStr =
        "Date,Time,Class,Confidence,Threat Level\n" +
        history
          .map(
            (log) =>
              `"${log.time.split(",")[0]}","${log.time.split(",")[1].trim()}","${log.class}","${log.confidence}","${log.threat_level}"`
          )
          .join("\n");
    }
  
    const blob = new Blob([dataStr], { type: format === "json" ? "application/json" : "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `detections.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  

  return (
    <div className="flex flex-wrap gap-8 p-10 ring-1 hover:ring-2 transition duration-200 justify-center rounded-md">
      <button onClick={() => exportData("csv")} className="px-4 py-1 font-bold text-sky-300 bg-gray-900 rounded-lg shadow-lg transition hover:bg-teal-600 hover:text-black">
        Export as CSV
      </button>
      <button onClick={() => exportData("json")} className="px-4 py-1 font-bold text-sky-300 bg-gray-900 rounded-lg shadow-lg transition hover:bg-teal-600 hover:text-black">
        Export as JSON
      </button>
    </div>
  );
}
