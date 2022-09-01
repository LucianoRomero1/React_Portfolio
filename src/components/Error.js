import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <strong>This page doesn't exist </strong>
        <Link to="/home">Back to Home</Link>
    </div>
  )
}
