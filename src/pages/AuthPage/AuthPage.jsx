import React from "react";
import { useState } from "react"
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage(props) {
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <>
      <h1>AuthPage</h1>
      <button onClick={()=> setShowSignUp(!showSignUp)}>
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>
      {showSignUp ? 
      <SignUpForm setUser={props.setUser} />
      : 
      <LogInForm setUser={props.setUser} /> 
      }
    </>
  );
}
