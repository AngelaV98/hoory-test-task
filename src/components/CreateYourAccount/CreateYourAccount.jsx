import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CreateYourAccount.scss";

import google_icon from "../../assets/google icon.svg";
import password_visibility_icon from "../../assets/password visibility.svg";

class CreateYourAccount extends Component {
  onSignUp = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="CreateYourAccount">
        <h3>Create your account</h3>
        <div className="google-sign-up">
          <img src={google_icon} alt="Google icon" />
          <span>Sign Up with Google</span>
        </div>
        <div className="sign-up-options-separator">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <form onSubmit={this.onSignUp}>
          <div className="full-name">
            <div>
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div>
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
          </div>
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
          <p className="policy">
            By registering an account with us you agree to the PP and T&C.
          </p>
          <button type="button">Create account</button>
          <p>
            Have an account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}


export default CreateYourAccount;