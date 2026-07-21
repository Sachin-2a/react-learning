import { useCallback, useEffect, useRef, useState } from "react";


function App() {

  const [length,setlength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str +="1234567890";
    if(charAllowed) str+="!@#$%^&*(){}[]/?";

    for (let i = 1; i <=length; i++) {
      let ch=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(ch);
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);

  const passwordRef=useRef(null)

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator]);

  const copyToClipBoard=useCallback(()=>{
    //the passwordRef can be used to highlight the contents so that it improves the user experience
    passwordRef.current?.select()

    // ? is use to optionally select the values

   // passwordRef.current?.setSelectionRange(0,3)  =>Allows you to controll how many characters can be selected

    window.navigator.clipboard.writeText(password);
  },[password])


  return(
    <>
    <div className="w-full max-w-md mx-auto rounded-2xl px-4 py-3 my-8 text-orange-700 bg-gray-700 shadow-md">
      <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-1 py-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyToClipBoard}
          className="px-1 py-3 bg-blue-700 text-white outline-none shrink-0">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={8}
              max={50}
              className="cursor-pointer"
              onChange={(e)=>{setlength(e.target.value)}}
              
            />
            <label className="text-white">Length: {length}</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={()=>{setnumberAllowed((prev)=> !prev)  
                }}
            />
            <label className="text-white">Numbers</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={()=>{setcharAllowed((prev)=>!prev)
              }}
            />
            <label className="text-white">Characters</label>
          </div>

        </div>

    </div>
    </>
  )
  
}

export default App;
