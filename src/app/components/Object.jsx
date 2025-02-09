"use client"
import React, { useEffect, useState } from "react";

const Object = () => {
  const [objects, setobjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setobjects([
        { id: 1, name: "person", confidence: 92 },

        { id: 2, name: "cat", confidence: 72 },

        { id: 3, name: "dog", confidence: 98 }
      ]);
    },1000);
  },[]);


  // useEffect(() => {
  //   fetch("http://localhost:5000/detected_objects")
  //     .then((res) => res.json())
  //     .then((data) => setObjects(data));
  // }, []);

  return (
    <div className="  ring-1 hover:ring-2 transition duration-200  rounded-md text-sky-300 ">
      <h1 className="relative flex justify-center items-center  p-1 rounded-md   font-bold ">
        Detected Objects
      </h1>

      <ul>
        {objects.map((obj)=>(
          <li key={obj.id} className="  ">
            {obj.name} - {obj.confidence}%
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Object;
