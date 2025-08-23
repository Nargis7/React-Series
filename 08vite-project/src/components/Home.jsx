import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    // Navigate to the about page
    navigate('/about');
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>
        Move to about page
      </button>
    </div>
  )
}

export default Home
