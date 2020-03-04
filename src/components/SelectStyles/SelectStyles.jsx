import React, { Component } from "react";
import { connect } from "react-redux";

import "./SelectStyles.scss";

import female_logo from "../../assets/logos/female-1.svg";
import male_logo from "../../assets/logos/male-1.svg";

import selected_female_logo from "../../assets/logos/female-selected-1.svg";
import selected_male_logo from "../../assets/logos/male-selected-1.svg";

import { setAssistantGender, setSchemeColor } from "../../redux/actions";

const colorSchemes = [
  { color: "blue", isActive: false },
  { color: "green", isActive: false },
  { color: "orange", isActive: false },
  { color: "red", isActive: false },
  { color: "purple", isActive: false },
  { color: "pink", isActive: false },
  { color: "light-blue", isActive: false }
];

class SelectStyles extends Component {
  state = {
    assistantGender: "",
    colorScheme: ""
  };
  onGenderChange(assistantGender) {
    this.setState({ assistantGender });
  }
  onColorSchemeChange(colorScheme) {
    colorSchemes.forEach(item => {
      if (item.color === colorScheme) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
    this.setState({ colorScheme });
  }
  onClickNext = () => {
    const { assistantGender, colorScheme } = this.state;

    this.props.setGender(assistantGender);
    this.props.setColor(colorScheme);
  };

  render() {
    const { assistantName } = this.props;
    const { assistantGender } = this.state;

    const femaleLogo =
      assistantGender === "female" ? selected_female_logo : female_logo;
    const maleLogo =
      assistantGender === "male" ? selected_male_logo : male_logo;

    return (
      <div className="SelectStyles">
        <div className="set-icon">
          <h3>Select {assistantName}'s icon</h3>
          <img
            src={femaleLogo}
            alt="Female Logo"
            onClick={() => this.onGenderChange("female")}
          />
          <img
            src={maleLogo}
            alt="Male Logo"
            onClick={() => this.onGenderChange("male")}
          />
        </div>
        <div className="set-color">
          <h3>Select color scheme</h3>
          <div className="color-schemes">
            {colorSchemes.map(({ color, isActive }) => (
              <div
                key={color}
                className={`color-scheme color-scheme-${color} ${
                  isActive
                    ? `color-scheme-active color-scheme-${color}-active`
                    : ""
                }`}
                onClick={() => this.onColorSchemeChange(color)}
              />
            ))}
          </div>
        </div>
        <button type="button" className="next-btn" onClick={this.onClickNext}>
          Next
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  assistantName: state.assistantName,
  assistantGender: state.assistantGender,
  error: state.error,
  loading: state.loading
});
const mapDispatchToProps = dispatch => ({
  setGender: gender => dispatch(setAssistantGender(gender)),
  setColor: color => dispatch(setSchemeColor(color))
});


export default connect(mapStateToProps, mapDispatchToProps)(SelectStyles);
