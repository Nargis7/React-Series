import React from 'react'
import nargispic from '../assets/nargispic.jpeg'
import './UserCard.css'

const UserCard = () => {
  return (
    <div>
      <div className='user-container'>
        <p id='title'>Nargis Perween</p>
        <img id='user-img' src={nargispic} width={100} alt="nargispic" />
        <p id='user-desc'>Software Engineer</p>
      </div>
    </div>
  )
}

export default UserCard
