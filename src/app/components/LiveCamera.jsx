'use client'
import { useEffect, useRef } from "react";

export default function VideoStream() {
  const canvasRef = useRef(null);
  let socket;

  useEffect(() => {
    socket = new WebSocket("ws://localhost:8000/video");
    socket.binaryType = "blob"; 

    socket.onmessage = async (event) => {
      const blob = event.data;
      const bitmap = await createImageBitmap(blob);  
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      }
    };

    socket.onclose = () => console.log("WebSocket closed");
    socket.onerror = (err) => console.error("WebSocket error", err);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <canvas ref={canvasRef} width={640} height={480} className="rounded-lg" />
  );
}
