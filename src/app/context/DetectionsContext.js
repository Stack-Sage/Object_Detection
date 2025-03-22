"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DetectionContext = createContext();

export const DetectionProvider = ({ children }) => {
  const [detections, setDetections] = useState([]);
  const [detectionHistory, setDetectionHistory] = useState([]);

  useEffect(() => {
    const fetchDetections = async () => {
      try {
        const response = await fetch("http://localhost:8000/detections");
        const data = await response.json();

        if (data.detections) {
          const timestampedDetections = data.detections.map((det) => ({
            ...det,
            time: new Date().toISOString(), 
          }));

          setDetections(timestampedDetections);
          setDetectionHistory((prev) => [...prev, ...timestampedDetections]);
        }
      } catch (error) {
        console.error("Error fetching detections:", error);
      }
    };

    fetchDetections();
    const interval = setInterval(fetchDetections, 1000);
    return () => clearInterval(interval);
  }, []);

 
  const getConfidenceColor = (confidence) => {
    if (confidence >= 75) return "bg-emerald-600 text-white"; 
    if (confidence >= 50) return "bg-yellow-500 text-black"; 
    return "bg-red-600 text-white"; 
  };

  const calculateOverallThreat = (detections) => {
    if (detections.some(d => d.threat_level === "High")) return "High";
    if (detections.some(d => d.threat_level === "Medium")) return "Medium";
    return "Low";
  };

  const exportToCSV = () => {
    if (!detectionHistory.length) return;

    const headers = ["Date", "Time", "Class", "Confidence", "Threat Level"];
    const csvRows = [headers.join(",")];

    detectionHistory.forEach((log) => {
      const dateObject = log.time ? new Date(log.time) : new Date();
      
     
      if (isNaN(dateObject.getTime())) {
        return; 
      }

      const dateString = dateObject.toLocaleDateString();
      const timeString = dateObject.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const confidence = log.confidence !== undefined ? log.confidence.toFixed(0) + "%" : "Unknown";
      const threatLevel = log.threat_level || "Low";
      const className = log.class || "Unknown Object";

      csvRows.push([dateString, timeString, className, confidence, threatLevel].join(","));
    });

    
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);


    const a = document.createElement("a");
    a.href = url;
    a.download = `detection_logs_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DetectionContext.Provider
      value={{
        detections,
        detectionHistory,
        getConfidenceColor,
        calculateOverallThreat,
        exportToCSV, 
      }}
    >
      {children}
    </DetectionContext.Provider>
  );
};

export const useDetections = () => useContext(DetectionContext);
