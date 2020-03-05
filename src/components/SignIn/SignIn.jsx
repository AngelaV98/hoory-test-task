import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./SignIn.scss";

import { signInAssistant } from "../../redux/actions";

import Validator from "../../helpers/Validator";

import google_icon from "../../assets/google icon.svg";
import password_visibility_icon from "../../assets/password visibility.svg";

class SignIn extends Component {
  validator = new Validator();
  state = {
    isVisible: false,
    email: "",
    password: "",
    isError: false
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onMakePasswordVisible = e => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };
  onSignIn = e => {
    e.preventDefault();
    const { signIn } = this.props;
    const { email, password } = this.state;
    const assistant = { email, password };

    const { isEmail, isEmpty } = this.validator;
    if (!isEmpty(email) && isEmail(email) && !isEmpty(password)) {
      signIn(assistant);
      this.props.history.push("/profile");
    } else {
      this.setState({ isError: true });
    }
  };

  render() {
    const { isVisible, email, password, isError } = this.state;

    return (
      <div className="CreateYourAccount">
        <div>
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
            <button type="submit">Sign In</button>
            <h5 style={{ color: "red" }}>
              {isError ? "Something went wrong" : ""}
            </h5>
            <p>
              Don't have an account? <Link to="/">Sign Up</Link>
            </p>
            <p>
              <Link to="/">Forgot Password?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: assistant => dispatch(signInAssistant(assistant))
});

export default connect(null,mapDispatchToProps)(SignIn);