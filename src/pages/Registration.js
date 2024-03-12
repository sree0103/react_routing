import React from "react";
export default function Registration() {
  return (
    <div class="register">
      <form action="register" method="post">
        <h2>Registration Form</h2>
        <label>UserName:</label>
        <br></br>
        <input type="text" name="username"></input>
        <br></br>
        <label>Email:</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input type="password" name="password"></input>
        <br></br>
        <label>Gender:</label>
        Male <input type="radio" name="gender" value="male"></input>
        Female <input type="radio" name="gender" value="female"></input>
        Other <input type="radio" name="gender" value="other"></input>
        <br></br>
        <label>Role:</label>
        Admin
        <input type="radio" name="role" value="admin"></input>
        Customer
        <input type="radio" name="role" value="customer"></input>
        <br></br>
        <label>Address:</label>
        <textarea name="address"></textarea>
        <br></br>
        <input type="submit" value="SUBMIT"></input>
      </form>
    </div>
  );
}
