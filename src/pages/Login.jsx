import axios from 'axios'
import React, { useContext, useState } from 'react'
import "../App.css"
import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Contextapi'

const Login = () => {
  let { users, setUsers } = useContext(Authcontext)
  let redirect = useNavigate()
  let [logindata, setlogindata] = useState({ email: '', password: '' })
  let { email, password } = logindata
  let handlechange = (e) => {
    let { name, value } = e.target
    setlogindata({ ...logindata, [name]: value })
  }
  let handlesubmit = async (e) => {
    e.preventDefault();
    console.log(logindata);
    try {
      let fetching = await axios.get('http://localhost:5000/user')
      let respone = fetching.data.find((x) => x.email === email && x.password === password)
      if (respone) {
        localStorage.setItem("users", JSON.stringify(respone))
        setUsers(respone)
        toast.success('sucessfully login')
        redirect('/')
        return
      }
    } catch (error) {
      toast.error('something is wrong')
    }
  }

  return (
    <div className="container" onSubmit={handlesubmit}>
      <form className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username / Email" name='email' value={email} onChange={handlechange} className="input-field" />

        <input type="password" placeholder="Password" name='password' value={password} onChange={handlechange} className="input-field" />

        <button type='submit' className="login-btn"> LOGIN</button>
        
        <div className="login-container">
          <NavLink to='/register' ><button className="login-btn" >create account</button></NavLink>
        </div>
      </form>

    </div>
  );
}

export default Login