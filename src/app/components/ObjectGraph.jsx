"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";
import { FaChartBar, FaChartArea } from "react-icons/fa"; 
import { motion } from "framer-motion"; 
import { useDetections } from "../context/DetectionsContext";

const ObjectGraph = () => {
  const { detections } = useDetections();
  const [showBarChart, setShowBarChart] = useState(true); 
  
  const [data, setData] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      time: new Date(Date.now() - i * 4000).toISOString(),
      count: 0,
      objects: [],
    })).reverse()
  );

  useEffect(() => {
    if (detections.length > 0) {
      setData((prev) => [
        ...prev.slice(-9),
        {
          time: new Date().toISOString(),
          count: detections.length,
          objects: detections.map(({ class: objectName }) => objectName),
        },
      ]);
    }
  }, [detections]);

  return (
    <div className="text-sky-300 rounded-lg hover:ring-2 transition-all shadow-lg w-[100%] ">
      <div className="flex justify-between items-center">
        <h2 className="text-md sm:text-lg font-bold text-center">
          Live Object Trends
        </h2>
        <button
          className="p-2 text-lg sm:text-xl text-white transition-all hover:scale-110"
          onClick={() => setShowBarChart(!showBarChart)}
        >
          {showBarChart ? <FaChartArea /> : <FaChartBar />}
        </button>
      </div>

      <motion.div
        key={showBarChart ? "bar" : "area"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ResponsiveContainer width="100%" height={250}>
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#0055ff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
          </svg>

          {showBarChart ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" opacity={0.3} />
              <XAxis
                dataKey="time"
                tickFormatter={(time) =>
                  new Date(time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })
                }
                tick={{ fill: "#ddd", fontSize: 10, dy: 6 }}
              />
              <YAxis tick={{ fill: "#ddd", fontSize: 10 }} allowDecimals={false} />
              <Tooltip
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  const { value, payload: { objects = [] } = {} } = payload[0];
                  return (
                    <div className="bg-black/80 text-blue-500 brightness-150 shadow-md shadow-blue-600 p-3 rounded-md text-md ">
                      <p><b>Total Objects:</b> {value}</p>
                      {objects.length > 0 && (
                        <p><b>Detected:</b> {objects.join(", ")}</p>
                      )}
                    </div>
                  );
                }}
                cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
              />
              <Bar
                dataKey="count"
                fill="url(#gradientColor)"
                barSize={24}
                radius={[6, 6, 0, 0]}
                isAnimationActive
              />
            </BarChart>
          ) : (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#0055ff" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="black" opacity={0.3} />
              <XAxis
                dataKey="time"
                tickFormatter={(time) =>
                  new Date(time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })
                }
                tick={{ fill: "#ddd", fontSize: 10, dy: 6 }}
              />
              <YAxis tick={{ fill: "#ddd", fontSize: 10 }} allowDecimals={false} />
              <Tooltip
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  const { value, payload: { objects = [] } = {} } = payload[0];
                  return (
                    <div className="bg-black/80 text-blue-500 brightness-150 shadow-md shadow-blue-600 p-3 rounded-md text-md ">
                      <p><b>Total Objects:</b> {value}</p>
                      {objects.length > 0 && (
                        <p><b>Detected:</b> {objects.join(", ")}</p>
                      )}
                    </div>
                  );
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#00d4ff"
                strokeWidth={3}
                fill="url(#areaGradient)"
                isAnimationActive
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default ObjectGraph;
