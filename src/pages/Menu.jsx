import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css'
import { Authcontext } from '../context/Contextapi'
import toast from 'react-hot-toast'

const Menu = ({searchTerm,setSearchTerm,sortyear,setSortyear,Darkmode,setDarkmode}) => {
  let redirect=useNavigate()
  let {users,setUsers}=useContext(Authcontext)
   let logout=()=>{    
        localStorage.removeItem("users")
        setUsers(null)
        redirect( "/login" )
      toast.error("logout Sucessfully")
      }
  return (
    <div>
       { 
    users ? <>
        <nav className="navbar">
      <div className="logo">

        <NavLink to="/">LOGO</NavLink>
      </div>
      <ul className="nav-links">
        <li >
          <input type="text"  placeholder='search Movies..'  className='search-input' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </li>
        <li className="sort-item">
                <select className='sort-select'   value={sortyear || ""} onChange={(e) => setSortyear(e.target.value)}>
                  <option value="">Sort by Year</option>
                  <option value="asec">Year by Ascending</option>
                  <option value="desc">Year by Descending</option>
                </select>

       </li>
       <li>
        <label >
          <input type="checkbox" checked={Darkmode} 
          onClick={(e)=>setDarkmode(!Darkmode)}/>
          DarkMode
        </label>
       </li>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={logout}>LOGOUT</NavLink>
        </li>
        <li>
          <div>{users.name}</div>
        </li>
      </ul>
    </nav>
    </>:
    <>
        <nav className="navbar">
      <div className="logo">
        <NavLink to="/">LOGO</NavLink>
      </div>

      <ul className="nav-links">
        
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/register">REGISTER</NavLink>
        </li>
      </ul>
    </nav>
    </>
   }
    </div>
  
  )
}

export default Menu