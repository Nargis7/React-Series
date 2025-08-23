import React from 'react'
import { useParams } from 'react-router-dom'
const ParamComponent = () => {
  const { id } = useParams()
  return (
    <div>
      <h2>Student ID: {id}</h2>
    </div>
  )
}



export default ParamComponent
