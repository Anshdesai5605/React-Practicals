import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("Hide");

  const changeText= () =>{
    if(text=="Hide"){
      setText("Show");
    } else{
      setText("Hide");
    }
  };

  return (
    <>
    <p>{text}</p>
    <button onClick={changeText}>Toggle Text</button>
    </>
  )
}

export default App
