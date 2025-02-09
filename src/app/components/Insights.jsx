"use client";
import React, { useEffect, useState } from "react";

const Insights = () => {
  const [insights, setInsights] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setInsights("Most Detected Objects: Person ");
    }, 1000);
  }, []);
  return (
    <div className="p-4  ring-1 hover:ring-2 transition duration-200   rounded-md">
      <h2 className="text-lg font-bold">AI Insights</h2>
      <p>{insights}</p>
    </div>
  );
};

export default Insights;
