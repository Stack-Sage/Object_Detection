'use client'

export default function ExportButtons({ logs }) {
   const exportData = (format) => {
     const dataStr =
       format === "json"
         ? JSON.stringify(logs, null, 2)
         : logs.map((log) => `${log.time},${log.object},${log.movement},${log.threat}`).join("\n");
 
     const blob = new Blob([dataStr], { type: format === "json" ? "application/json" : "text/csv" });
     const url = URL.createObjectURL(blob);
     const a = document.createElement("a");
     a.href = url;
     a.download = `detections.${format}`;
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
   };
 
   return (
     <div className="flex flex-row flex-wrap gap-8 p-8  ring-1 hover:ring-2 transition duration-200  justify-center rounded-md">
       <button onClick={() => exportData("csv")} className="px-4 py-2 w-fit h-fit  text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90 ">
         Export as CSV
       </button>
       <button onClick={() => exportData("json")} className="px-4 py-2 w-fit h-fit  text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90" >
         Export as JSON
       </button>
       <button onClick={() => exportData("pdf")} className="px-4 py-2 w-fit h-fit  text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90">
         Export as PDF
       </button>
       <button onClick={() => exportData("image")} className="px-4 py-2 w-fit h-fit  text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(4,4,38)] active:scale-90">
         Export as Image
       </button>
     </div>
   );
 }
 