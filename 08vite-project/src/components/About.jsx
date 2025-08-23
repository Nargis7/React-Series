import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    // Navigate to the dashboard page
    navigate('/dashboard');
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>
        Move to dashboard page
      </button>
    </div>
  )
}

export default About
