import React from "react";
import { Link } from "react-router-dom";


async function handleLogin(e){
e.preventDefault()
}


function LoginPage() {
  return (
    <div className="flex  items-center justify-center bg-black min-h-screen ">
      <div className="flex flex-col p-2 w-72 h-72 bg-white text-black rounded-md">
        <h1 className="Headings">SociaLaze Login</h1>
        <form onSubmit={handleLogin}>
          <input placeholder="username" className="inputs" required />
          <input placeholder="password" className="inputs" required/>
          <div className="flex justify-evenly m-2">
            <button type="submit" className="buttonDark">Login</button>
            <Link to='/Signup' className="buttonLight">New here? Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
