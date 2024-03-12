import React from "react";
export default function Login() {
  return (
    <div className="login">
      <form action="validate" method="post">
        <h2>USER LOGIN</h2>
        <label> Email:</label>
        <br />
        <input type="email" name="email"></input>
        <br />
        <label> Password:</label>
        <br />
        <input type="password" name="password"></input> <br />
        <br />
        <input type="submit" value="LOGIN"></input>
      </form>
    </div>
  );
}
