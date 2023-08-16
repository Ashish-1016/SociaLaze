import React from "react";
import { Link } from "react-router-dom";

async function handleSignup(e) {
  e.preventDefault();
}

function SignUpPage() {
  return (
    <div className="flex  items-center justify-center bg-black min-h-screen ">
      <div className="flex flex-col p-2 w-72 h-80 bg-white text-black rounded-md">
        <h1 className="Headings">Welcome to SociaLaze</h1>
        <form onSubmit={handleSignup}>
          <input placeholder="username" className="inputs" required />
          <input placeholder="password" className="inputs" required />
          <input placeholder="confirm password" className="inputs" required />
          <div className="flex justify-evenly m-2">
            <button type="submit" className="buttonDark">
              SignUp
            </button>
            <Link to="/login" className="buttonLight">
              Already a user? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
