import React from 'react'
import Menu from './Menu'
import Logo from './Logo'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  return (
    <div >
      {/* <Menu/> */}
      <Logo/>
      <Outlet/>
      <Toaster/>
    </div>
  )
}

export default Navbar