import React, {  createContext, useEffect, useState } from 'react'

export let Authcontext = createContext()
const Contextapi = ({children}) => {
    let[users,setUsers]=useState()
    useEffect(()=>{
        let data = localStorage.getItem("users")
        setUsers(JSON.parse(data))
    },[])
  return (
<Authcontext.Provider value={{users,setUsers}}>
    {children}
</Authcontext.Provider>
  )
}

export default Contextapi