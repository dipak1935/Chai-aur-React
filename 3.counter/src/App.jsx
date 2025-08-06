import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter]=useState(10);

  const addValue=()=>{
    
    if(counter!=20){
      counter+=1;
      setCounter(counter);
    }
    
    
  }

  const subtractValue = ()=>{

    if(counter!=0){
      counter-=1;
      setCounter(counter);
    } 
    
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue} >Increase Value</button><br/>
      <button onClick={subtractValue}>Decrease Value </button>
      

    </>
  )
}

export default App
