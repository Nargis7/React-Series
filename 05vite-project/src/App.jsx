import { useState } from 'react'
import './App.css'

function App() {

  function handleClick(){
 alert('Button clicked!')
  }

  function handleMouseOver(){
    alert('Mouse is over the text!')
  }
 function handleSubmit(event){
    event.preventDefault();
    alert('Form submitted!')
  }
  return (
   <div>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type something..." />
      <button type="submit">Submit</button>
    </form>

    {/* <p onMouseOver={handleMouseOver} style={{color: 'blue'}}>
      Button has not been clicked yet.
    </p>

    <button onClick={handleClick}>
      Click me
    </button> */}
   </div>
  )
}

export default App
