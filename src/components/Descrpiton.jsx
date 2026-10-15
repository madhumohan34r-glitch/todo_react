import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Descrption.css"
const Descrpiton = () => {
  const { state } = useLocation()
  return (
    <div className="description-container">
      <div className="description-card">
        <img src={state.poster} alt={state.title} className="description-poster" />
        <div className="description-content"> <h1 >{state.title}</h1></div>
        <p>
          <strong>Overview:</strong> {state.overview}
        </p>
        <h3>Year: {state.year}</h3>
        <div>
          <h3>Rating: ⭐ {state.rating}</h3>
        </div>
      </div>
    </div>
  )
}

export default Descrpiton