import { useState } from 'react'
import './App.css'

function App() {
  const [text , setText]= useState("Light Mode on")

  const changeMode= () => {
    if(text=="Light Mode on"){
      setText("Dark Mode on");
      document.body.style.backgroundColor = "#000";
    } else{
      setText("Light Mode on"); 
      document.body.style.backgroundColor = "#fff";
    }
  }
  return (
    <>
    <p>{text}</p>
    <button onClick={changeMode}>Change mode</button>
    </>
  )
}

export default App
