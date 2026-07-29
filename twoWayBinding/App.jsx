import { useState } from "react";

function App() {
  const[title,setTitle]=useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('sbmitted',title);
    setTitle('')
  }
  return (
    <>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
          type='text' 
          className="bg-gray-400 m-10 p-10" 
          placeholder="Enter the name"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value )
           
          }}
        />
        <button>Submit</button>
      </form>

    </>
  )
  

}

export default App
