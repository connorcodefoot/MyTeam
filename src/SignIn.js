import React from "react";
import { useState } from "react";


function SignIn (props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(email, password)
    
  }

  return(
    <>
    <form id="sign-in" onSubmit={handleFormSubmit}>
      <input
      id = "email"
      value = {email}
      onChange = {(e) => setEmail(e.target.value)}
      />
      <input
      id = "password"
      value = {password}
      onChange = {(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </>
  )


}


export default SignIn