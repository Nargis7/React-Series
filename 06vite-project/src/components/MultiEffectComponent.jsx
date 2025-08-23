import React from 'react'
import { useState,useEffect } from 'react'

const MultiEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('Effect: Count changed!', count);
  }, [count]);
// side-effect logic will run only when count is changed
  useEffect(()=>{
    const intervalId = setInterval(() => {
      console.log("setinterval started");
      setSecond(prevSecond => prevSecond + 1);
    }, 1000);
    return () => {
      console.log('Cleanup: Clearing interval');
      clearInterval(intervalId);
    };
  }, []);
  // it will run only once when the component is mounted
  return (
    <div>
      <h1>Count: {count}</h1>
      {/* <h1>Second: {second}</h1> */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Second: {second}</h2>
    </div>
  );
}

export default MultiEffectComponent
