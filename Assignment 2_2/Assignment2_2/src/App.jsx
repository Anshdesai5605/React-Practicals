import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [message, SetMessage]= useState('');

  const resetbtn = () =>{
    setName('');
    setEmail('');
    SetMessage('');
  }

  return (
    <div>
      <h2>Simple Form</h2>
      <form>
        <input type='text' 
        placeholder='Name' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        /><br /><br />

        <input
        type='text'
        placeholder='Message'
        value={message}
        onChange={(e)=> SetMessage(e.target.value)}
        /><br /><br />

        <button onClick={resetbtn}>Reset</button>
      </form>

      <h3>Live Preview</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  )
}

export default App
