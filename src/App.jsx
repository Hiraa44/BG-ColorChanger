import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")
  console.log(color);
  function changeColor(event){
    const user_input = event.target.value;
    if (user_input)
      setColor(user_input)
    else
      setColor("olive");
  }
   
  return (
    <>
      
        <div className='bg-green-300' style={{backgroundColor:color}}>
          <h1>Color Change</h1>
          <h4>Enter a color to change the background!!!</h4>
        <input type="text" onChange={changeColor}></input>
        </div>
        
        
        
        <h1></h1>
        
    </>
  )
}

export default App
