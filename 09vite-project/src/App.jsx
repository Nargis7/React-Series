import { useState } from 'react'

function App() {
const[count, setCount] = useState(0)

const addValue = () => {
  setCount(count + 1);
}
const removeValue = () => {
  setCount(count - 1);
}

  return (
    <>
    <h2>Counter value: {count} </h2>
    <button  onClick={addValue}>
      Increment Counter
    </button>
    <br />
    <button 
    onClick={removeValue}
    >Decrement Counter</button>
    </>
  )
}
export default App
