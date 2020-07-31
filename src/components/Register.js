import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="login-form">
        <div className="card card-body">
          <h2 className="text-center">Sign up</h2>
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
                type="email"
                className="form-control"
                placeholder="E-mail"
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
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="form-group">
            <button class="btn btn-primary btn-block">Register</button>
          </div>
          <Link to="/login">
            <p className="text-center">Already registered?</p>
          </Link>
        </div>
      </div>
    );
  }
}
