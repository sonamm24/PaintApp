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
    <label className="Email">Email address:
      <input type="text" />
    </label><br/>
    <button type="button" className="btn btn-outline-primary">Submit</button>
  </form>
  
  
  )
}

export default SignUp
