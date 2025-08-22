import React from 'react'
import { useState, useEffect } from 'react'

const TimerComponents = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
// it will runs on every render
  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  )
}

export default TimerComponents
