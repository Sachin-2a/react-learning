import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card'
function App() {

  const [userData,setUserData]=useState([]);
  const [index,setIndex]=useState(1);



  const  getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index])
 
  let printUserData=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return(
        <Card elem={elem}  idx={idx}/>
      )
    })
  }


  return (
            <div className="bg-black h-screen overflow-auto p-4 text-white">
              <div className='flex flex-wrap h-[82%] gap-4 p-2'>
                {printUserData}
              </div>
              <div className='flex justify-center gap-6 items-center p-4'>
                <button disabled={index==1?true:false} 
                onClick={()=>{
                       if(index>1)setIndex(index-1);
                       setUserData([]);
                       
                }
              } 
              className='bg-amber-400 text-black text-sm rounded-2xl px-4 py-2 font-semibold cursor-pointer active:scale-95 ' style={{opacity: index==1?0.5:1}}>Prev</button>

              <h3>Page {index}</h3>

                <button 
                  onClick={()=>{
                  setIndex(index+1);
                  setUserData([]);
                  
                }} 
                className='bg-amber-400 text-black text-sm rounded-2xl px-4 py-2 font-semibold cursor-pointer active:scale-95'>Next</button>
              </div>
            </div>
  )
}
export default App
