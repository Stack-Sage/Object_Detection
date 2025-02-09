"use client";

import React, { useEffect, useState } from "react";

const DistanceDisplay = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance((Math.random() * 5 + 1).toFixed(2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 ring-1 hover:ring-2 transition duration-200 text-sky-300 rounded-md">
      <h2 className="text-lg font-bold">Distance from Camera</h2>
      <p className="text-2xl font-bold">{distance} m</p>
    </div>
  );
};

export default DistanceDisplay;
