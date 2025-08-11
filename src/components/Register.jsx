import React from 'react'

function Register() {
  return (
    <div className='flex justify-center items-center h-svh w-svw'>
      <form action="/register" method='post'>
        <label for="username" >Username: </label>
        <input id="username"type="text" placeholder='Enter username here' name="username"/>
        <br/>
        <label for="email" >Email: </label>
        <input id="email"type="text" placeholder='Enter email here' name="email"/>
        <br/>
        <label for="password" >Password: </label>
        <input id="password"type="password" placeholder='Enter password here' name="password"/>
        <br/>
        <input className="border" type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Register
