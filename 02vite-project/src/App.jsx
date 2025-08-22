import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
   <div>
    <Button incrementCount={handleClick} text="click me" >
      <h1>{count}</h1>
      </Button>
    {/* <Card name="Nargis Perween">
      <h1>Best web Dev Course</h1>
      <p>This is a great course to learn web development.</p>
      <p>will complete the course</p>
    </Card> */}
   </div>
  )
}

export default App
