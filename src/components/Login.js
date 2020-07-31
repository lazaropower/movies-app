import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <div className="login-form">
        <div className="card card-body">
          <h2 className="text-center">Sign in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group">
            <button class="btn btn-primary btn-block">Login</button>
          </div>
          <Link to="/register">
            <p className="text-center">Not registered yet?</p>
          </Link>
        </div>
      </div>
    );
  }
}
