import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Movielist from './Movielist'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Movielist/>
        <Outlet/>
    </div>
  )
}

export default Layout