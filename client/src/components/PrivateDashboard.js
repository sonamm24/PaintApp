import React, {Fragment, useState, useEffect} from 'react'


function PrivateDashboard({setAuth}) {

  const [name, setName] = useState("")

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: {token: localStorage.token}
      });


      const parseRes = await response.json();

      console.log(parseRes)

      setName(parseRes.first_name)


    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getName()
  }, [])

  const logout = e => {
    e.preventDefault();
 
     localStorage.removeItem("token");
 
     setAuth(false);
   }

  return (
    <Fragment>
 
      <div className="nav">
        <div className="left-side">

        </div>
        <div className="middle">

        </div>
        <div className="right side">
          <a>Welcome, {name}!</a>
          <button onClick={(e) => logout(e)}>Logout</button>
        </div>
      </div>
    </Fragment>
  )
}

export default PrivateDashboard
