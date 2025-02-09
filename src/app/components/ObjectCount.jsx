"use client"
import React, { useEffect, useState } from 'react'

const ObjectCount = () => {
   
      const [objectCount,setObjectCount] = useState(0);
      useEffect(()=>{
         const interval = setInterval(()=>{
            setObjectCount(Math.floor(Math.random()*10)) // this is a mock data which i have used for now , until i get the api 
         },2000)
     
      return() => clearInterval(interval);
   },[]);

  return (
   <div className="p-4  ring-1 hover:ring-2 transition duration-200  text-sky-300 rounded-lg">
      <div className='flex gap-4 items-center tracking-tighter '>

      <h2 className="text-lg font-bold">Objects Detected  </h2>
      <h2 className="text-2xl font-bold"> {objectCount}</h2>
      </div>
      <p className='italic  text-sm'> AI Generated Images of Objects</p>
    </div>
  )
}

export default ObjectCount
