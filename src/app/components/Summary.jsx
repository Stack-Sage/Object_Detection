'use client'
import { useState } from "react";

export default function AISummary() {
  const [summary, setSummary] = useState(
    "Detected 3 objects: 1 person, 1 car, 1 high-threat item."
  );

  return (
    <div className="p-4  ring-1 hover:ring-2 transition duration-200  rounded-md shadow text-sky-300 ">
      <h2 className="text-xl font-bold mb-2">AI Summary</h2>
      <p>{summary}</p>
    </div>
  );
}
