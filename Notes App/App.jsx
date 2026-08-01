import { useState } from "react";

function App() {

  const [title,setTitle]=useState('')
  const [detail,setDetail]=useState('');
  const [task,setTask]=useState([]);

  const submitHandler=(e)=>{
      e.preventDefault();

      const copyTask=[...task];
      copyTask.push({title,detail});
      setTask(copyTask)

      setTitle('');
      setDetail('');
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask);



  }
  return (
    <div className="h-screen lg:flex bg-black text-white" >
       
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex lg:w-1/2 items-start flex-col p-10  gap-4  ">
          <h1 className="text-3xl font-bold">Add Notes</h1>
          <input 
              type='text' 
              placeholder="Enter the notes heading"
              className="px-5 py-2 font-medium border-2 w-1/2 rounded outline-none" 
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
          />

          <textarea
            type="text"
            className="px-5 flex font-medium items-start flex-row py-2 w-1/2 h-20 border-2 rounded outline-none"
            placeholder="Write detail"
            value={detail}
            onChange={(e)=>{
              setDetail(e.target.value)
            }}
          />
          
          <button className="w-1/2 font-medium active:bg-gray-300 active:scale-95 bg-white text-black px-5 py-2 rounded">Add Note</button>
        </form>
        <div className=" bg-gray-800 lg:border-l-2 lg:w-1/2  p-10">
          <h1 className="text-3xl font-bold">Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]'>
          {
            task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black p-4 bg-white">
                <div>
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3><br/>
                <p className="mt-1 leading-tight font-medium text-gray-500">{elem.detail}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx);
                }} className="w-full bg-red-800 text-white p-1.5 rounded-full font-bold cursor-pointer active:scale-90 active:bg-red-950">Delete</button>
              </div>
            })
          }
          
          </div>
        </div>
    </div>
  )
}
export default App
