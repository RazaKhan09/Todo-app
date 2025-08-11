import React, { useState } from 'react'

function Register() {
  const [message,setMessage]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handlesubmit=async (e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      console.log(response)
      const data=await response.json();
      if(data){
        setMessage("Registered Successfully! Please Log in.")
      }
      await setData(data.createdUser.email)
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <h1 className='text-3xl'>Welcome to Todo App</h1>
      <br/>
      <form  className="flex flex-col justify-center items-center bg-amber-200 h-48 w-72"onSubmit={handlesubmit}>
        <label htmlFor="email" >Email </label>
        <input className="border"id="email"type="text" placeholder='Enter email here' name="email" onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label htmlFor="password" >Create Password</label>
        <input className="border" id="password"type="password" placeholder='Enter password here' name="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <input className="border" type="submit" value="submit"/>
      </form>
      <br/>
      <span className='text-black'>{message}</span>
    </div>
  )
}

export default Register
