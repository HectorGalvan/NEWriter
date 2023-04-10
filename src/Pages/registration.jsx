// CreateAccount.js
import React from "react";
import { Button } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";

const Registration = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>Please enter your email and password to create an account.</p>
      <form onSubmit={(event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        const auth = withAuthenticator();
        auth.signUp(email, password);
      }}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};
export default Registration;