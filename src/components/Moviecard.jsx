import React from 'react'
import './Component.css'
import { NavLink } from 'react-router-dom'



const Moviecard = ({ x }) => {
  
 
    let { id, title, year, rating, poster, overview } = x

    return (
        <NavLink to={`/Moviecard/${id}`} state={x} className='movie-link'>
        <div className='moviecontiner'>
            
                <div className='img'>
                <img className='pic' src={poster} alt={title} />
            </div>
            
            <div>
                <h3 className='title'>{title}</h3>
            </div>
            <div className='rating'>
               
                <p >{rating}</p> 

            </div>
           
            
        </div>
        </NavLink>
        
    )
}

export default Moviecard