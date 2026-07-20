import {useState} from "react";

function App() {
  let [color,setColor]=useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12" >
        <div className="flex flex-wrap justify-center bg-white rounded-2xl px-4 py-2 gap-3" >
          <button className="bg-red-700 text-white px-3 py-2 rounded-2xl " onClick={()=>setColor("red")}>red</button>
          <button className="bg-blue-700 text-white px-3 py-2 rounded-2xl " onClick={()=>setColor("blue")}>blue</button>
          <button className="bg-green-700 text-white px-3 py-2 rounded-2xl " onClick={()=>setColor("green")}>green</button>
        </div>
      </div>
    </div>
  )
}

export default App;
