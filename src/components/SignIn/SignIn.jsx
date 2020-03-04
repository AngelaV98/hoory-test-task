import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignIn.scss";

import google_icon from "../../assets/google icon.svg";
import password_visibility_icon from "../../assets/password visibility.svg";

class SignIn extends Component {
  onSignIn = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="CreateYourAccount">
        <h3>Sign in to your account</h3>
        <div className="google-sign-up">
          <img src={google_icon} alt="Google icon" />
          <span>Sign In with Google</span>
        </div>
        <div className="sign-up-options-separator">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <form method="post" onSubmit={this.onSignIn}>
          <div className="email">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="password">
            <input type="password" name="password" placeholder="Password" />
            <img
              src={password_visibility_icon}
              alt="Password visibility icon"
            />
          </div>
          <button type="submit">Sign In</button>
          <p>
            Don't have an account? <Link to="/">Sign Up</Link>
          </p>
          <p>
            <Link to="/">Forgot Password?</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;