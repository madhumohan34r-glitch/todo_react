import React, { useState } from 'react'
import axios, {Axios} from 'axios'
import "../App.css";
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
const Register = () => {
    let redirect = useNavigate()
    let[formdata,setformdata]=useState({name:"",password:"",conformpassword:"",email:""})
    let{name,password,conformpassword,email}=formdata
    let handlechange=(e)=>{
        let{name,value}=e.target 
        setformdata({...formdata,[name]:value})
    }
    let handlesubmit=async(e)=>{
        e.preventDefault(); 
        console.log(formdata);
        let fecthing = await axios.get('http://localhost:5000/user')
        let gettingdata = fecthing.data.find((x)=>x.email === email )
        if (gettingdata) {
            toast.error('this is already register')
            return
        }



        if (name =='' || password =='' || conformpassword ==''||email =='') {
         toast.error('pls fill the form')
        }
        if (password != conformpassword) {
            toast.error('password and conformpassword not matched')
        }
        if (password.length < 6) {
            toast.error('enter password length minimum 6 digits')
            return
        }
        try {
            let posting = await axios.post('http://localhost:5000/user',formdata)
            toast.success(`${email}sucessfully register`)
           redirect("/login")
        } catch (error) {
            console.log(error);    
        }
    }
 return (
  <div className="container">
    <form onSubmit={handlesubmit} className="form-box">
      <h1>Register</h1>

      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={handlechange}
        className="input"
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handlechange}
        className="input"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        name="conformpassword"
        value={conformpassword}
        onChange={handlechange}
        className="input"
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handlechange}
        className="input"
      />

      <button type="submit" className="button">
        REGISTER
      </button>
      <div className="login-container">
      <NavLink to= '/login'><button className="login-btn">I HAVE ALREADY ACCOUNT</button></NavLink>
      </div>
    </form>
  </div>
);
}

export default Register