import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CreateYourAccount.scss";

import google_icon from "../../assets/google icon.svg";
import password_visibility_icon from "../../assets/password visibility.svg";

class CreateYourAccount extends Component {
  state = {
    isVisible: false,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onMakePasswordVisible = e => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };
  onSignUp = e => {
    e.preventDefault();

    const { signUp, nextStep } = this.props;
    const { firstName, lastName, email, password } = this.state;
    const assistant = { firstName, lastName, email, password };

    signUp(assistant);
    nextStep();
  };
  render() {
    const { isVisible, firstName, lastName, email, password } = this.state;

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
        <form method="post" onSubmit={this.onSignUp}>
          <div className="full-name">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={this.onChange}
                value={firstName}
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.onChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="password">
            <input
              type={`${isVisible ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              onChange={this.onChange}
              value={password}
            />
            <img
              src={password_visibility_icon}
              alt="Password visibility icon"
              onClick={this.onMakePasswordVisible}
            />
          </div>
          <p className="policy">
            By registering an account with us you agree to the PP and T&C.
          </p>
          <button type="submit">Create account</button>
          <p>
            Have an account? <Link to="/signin">Sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default CreateYourAccount;