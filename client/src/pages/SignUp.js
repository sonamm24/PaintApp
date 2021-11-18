import React from 'react'
import { FaFileExcel } from 'react-icons/fa'
import { Link } from 'react-router-dom'

 const SignUp = () => {
  return (
    
    <form >
      <h1 class="register"><u>Registeration </u></h1><br/><br/>
    
    <label className = "first">First name:
      <input type="text" />
    </label><br/>
    <label className = "Last">Last name:
      <input type="text" />
    </label><br/>
    <label className= "Phone">Phone No.:
      <input type="text" />
    </label><br/>
    <label className="Email">Email addr:
      <input type="text" />
    </label><br/>
    <label className="Password">Password:
      <input type="text" />
    </label><br/>
    <button class="button">Button</button>
  </form>
  
  
  )
}

export default SignUp
