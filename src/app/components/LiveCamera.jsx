'use client'

import { useState, useEffect } from "react";

export default function LiveCameraFeed() {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    // Replace with actual API fetching logic
    setVideoSrc("http://your-python-backend/video_feed");
  }, []);

  return (
    <div className="w-auto h-64  text-sky-300 ring-1 hover:ring-2 transition duration-200  flex items-center justify-center text-xl rounded-md bg-transparent">
      <h1>Live Camera Feed</h1>
      {/* {videoSrc ? (
        <img src={videoSrc} alt="Live Camera Feed" className="w-full h-full object-cover" />
      ) : (
        "Live Camera Feed (Waiting for Input...)"
      )} */}
    </div>
  );
}
