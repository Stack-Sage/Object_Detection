import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DetectionProvider } from "./context/DetectionsContext";
import Speak from "./components/Speak";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "Object Detection",
  description:
    "An advanced Object Detection application powered by a YOLO model and a Python backend. Detect and track objects in real-time with AI-based analysis.",
  keywords:
    "Object Detection, AI, YOLO, Machine Learning, Python, Computer Vision, Deep Learning",
  author: "Adarsh Pathania",
  robots: "index, follow",
  openGraph: {
    title: "Object Detection App",
    description:
      "Real-time object detection using AI with YOLO and Python backend.",
    url: "https://object-detection23412.onrender.com",
    type: "website",
    image:
      "https://cdn.pixabay.com/photo/2024/05/23/12/24/ai-generated-8783105_1280.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DetectionProvider>
         
          <Speak />
          {children}
        </DetectionProvider>
      </body>
    </html>
  );
}
