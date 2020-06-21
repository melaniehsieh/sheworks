import React from "react";

export const Login = () => (
  <div>
    <div id="container">
    <h1>Login</h1>
    <p>Let's login!</p>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  </div>
);
