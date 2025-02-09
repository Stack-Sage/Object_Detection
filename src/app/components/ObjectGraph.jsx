'use client'

import React, { useEffect, useState } from 'react'
import {LineChart, Line , XAxis, YAxis , Tooltip , ResponsiveContainer} from 'recharts';

const ObjectGraph = () => {
   const [data,setData] = useState([])

   useEffect(()=>{
      const interval = setInterval(()=>{
         setData((prev)=>[
            ...prev.slice(-9),// keeping last 10 points maybe more if needed ,
            {time: new Date().toLocaleDateString(), count:Math.floor(Math.random()* 10)},
         
         ]);
      },4000)

      return ()=> clearInterval(interval);
   },[])

  return (
   <div className="p-4  text-sky-300 rounded-md  ring-1 hover:ring-2 transition duration-200  ">
   <h2 className="text-lg font-bold">Live Object Trends</h2>
   <ResponsiveContainer width="100%" height={200}>
     <LineChart data={data}>
       <XAxis dataKey="time" />
       <YAxis />
       <Tooltip />
       <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
     </LineChart>
   </ResponsiveContainer>
 </div>
  )
}

export default ObjectGraph
