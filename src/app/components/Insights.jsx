"use client";
import React, { useEffect, useState } from "react";
import { useDetections } from "../context/DetectionsContext";

const UNSPLASH_ACCESS_KEY = "xo06x9tZy9N548QS34Yyv3OUbLtuJzCTe7G8V8vzo_g";

const Insights = () => {
  const { detections } = useDetections();
  const [insights, setInsights] = useState("Loading insights...");
  const [detectedObjects, setDetectedObjects] = useState([]);

  useEffect(() => {
    const fetchImagesForDetections = async () => {
      if (detections.length > 0) {
        const objectSummary = detections
          .map(
            (obj) =>
              `${obj.class} (${obj.confidence ? obj.confidence.toFixed(1) : "N/A"}%)`
          )
          .join(", ");
        setInsights(`Most Detected Objects: ${objectSummary}`);

        const updatedObjects = await Promise.all(
          detections.map(async (obj) => {
            const imageUrl = await fetchUnsplashImage(obj.class);
            return { ...obj, imageUrl };
          })
        );
        setDetectedObjects(updatedObjects);
      } else {
        setInsights("No objects detected yet.");
        setDetectedObjects([]);
      }
    };

    fetchImagesForDetections();
  }, [detections]);

  const fetchUnsplashImage = async (query) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
      );
      const data = await response.json();
      return data.results.length > 0
        ? data.results[0].urls.small
        : "/default.jpg";
    } catch (error) {
      console.error("Error fetching Unsplash image:", error);
      return "/default.jpg";
    }
  };

  return (
    <div className="flex flex-col p-4 ring-1 hover:ring-2 transition duration-200 rounded-md bg-transparent shadow-md">
      <h2 className="text-lg font-bold">Insights</h2>
      <p>{insights}</p>

      {/* Display detected object images */}
      <div className="grid items-center grid-cols-2 lg:grid-cols-4 gap-4 scale-90">
        {detectedObjects.map((obj, index) => (
          <div key={index} className="relative group z-0 card rounded-md">
            <img
              src={obj.imageUrl}
              alt={obj.class} 
              className="w-full card2 h-full opacity-85 hover:opacity-90 object-cover rounded-md transition-opacity duration-500 ease-in-out"
            />
            <div
              className="absolute -top-2 group-hover:opacity-100 -right-2 transform translate-y-[-100%] translate-x-[20%] 
            p-2 bg-black text-indigo-400 shadow-lg opacity-0 
            transition-opacity duration-300 ease-in-out hover:opacity-100 whitespace-nowrap scale-125 text-md rounded-lg"
            >
              <p>{`Detected: ${obj.class} (${obj.confidence ? obj.confidence.toFixed(1) : "N/A"}%)`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
