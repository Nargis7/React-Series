import React from 'react'
import { useState, useEffect } from 'react'

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => 
      setWindowWidth(window.innerWidth)
      console.log("Event: Window resized");
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('Cleanup: Removing resize event listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
