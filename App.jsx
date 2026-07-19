import { useState } from "react";

function App() {


let [counter,setCounter]=useState(0);

function increase(){
  if(counter>19){
    return ;
  }
  setCounter(counter+1);
 
}

function decrease(){
  if(counter<1){
    return;
  }
  setCounter(counter-1);
}
  return (
    <>
        <center><h1>Click Counter</h1>
            <p>Count:{counter}</p>        
            <button onClick={increase}>Add {counter}</button><br/>
            <button onClick={decrease}>subtract {counter}</button>
        </center>
        
    </>
  )
}

export default App;
