import React, { Component } from "react";

import "./SelectStyles.scss";

import getCurrentSchemeIcons from "../../helpers/getCurrentSchemeIcons";

const colorSchemes = [
  { color: "blue", isActive: true },
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
    colorScheme: "blue"
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
    const { setGender, setColor, nextStep } = this.props;

    setGender(assistantGender);
    setColor(colorScheme);
    nextStep();
  };

  render() {
    const { assistantName } = this.props;
    const { assistantGender, colorScheme } = this.state;

    const {
      female_logo,
      male_logo,
      selected_female_logo,
      selected_male_logo
    } = getCurrentSchemeIcons(colorScheme);

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

export default SelectStyles;