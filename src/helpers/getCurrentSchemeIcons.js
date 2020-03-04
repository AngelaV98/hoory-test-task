import female_logo_blue from "../assets/logos/female-1.svg";
import male_logo_blue from "../assets/logos/male-1.svg";
import female_logo_green from "../assets/logos/female-2.svg";
import male_logo_green from "../assets/logos/male-2.svg";
import female_logo_orange from "../assets/logos/female-3.svg";
import male_logo_orange from "../assets/logos/male-3.svg";
import female_logo_red from "../assets/logos/female-4.svg";
import male_logo_red from "../assets/logos/male-4.svg";
import female_logo_purple from "../assets/logos/female-5.svg";
import male_logo_purple from "../assets/logos/male-5.svg";
import female_logo_pink from "../assets/logos/female-6.svg";
import male_logo_pink from "../assets/logos/male-6.svg";
import female_logo_light_blue from "../assets/logos/female-7.svg";
import male_logo_light_blue from "../assets/logos/male-7.svg";

import selected_female_logo_blue from "../assets/logos/female-selected-1.svg";
import selected_male_logo_blue from "../assets/logos/male-selected-1.svg";
import selected_female_logo_green from "../assets/logos/female-selected-2.svg";
import selected_male_logo_green from "../assets/logos/male-selected-2.svg";
import selected_female_logo_orange from "../assets/logos/female-selected-3.svg";
import selected_male_logo_orange from "../assets/logos/male-selected-3.svg";
import selected_female_logo_red from "../assets/logos/female-selected-4.svg";
import selected_male_logo_red from "../assets/logos/male-selected-4.svg";
import selected_female_logo_purple from "../assets/logos/female-selected-5.svg";
import selected_male_logo_purple from "../assets/logos/male-selected-5.svg";
import selected_female_logo_pink from "../assets/logos/female-selected-6.svg";
import selected_male_logo_pink from "../assets/logos/male-selected-6.svg";
import selected_female_logo_light_blue from "../assets/logos/female-selected-7.svg";
import selected_male_logo_light_blue from "../assets/logos/male-selected-7.svg";

function getCurrentSchemeIcons(colorScheme) {
  let color;
  switch (colorScheme) {
    case "blue":
      color = [
        female_logo_blue,
        male_logo_blue,
        selected_female_logo_blue,
        selected_male_logo_blue
      ];
      break;
    case "green":
      color = [
        female_logo_green,
        male_logo_green,
        selected_female_logo_green,
        selected_male_logo_green
      ];
      break;
    case "orange":
      color = [
        female_logo_orange,
        male_logo_orange,
        selected_female_logo_orange,
        selected_male_logo_orange
      ];
      break;
    case "red":
      color = [
        female_logo_red,
        male_logo_red,
        selected_female_logo_red,
        selected_male_logo_red
      ];
      break;
    case "purple":
      color = [
        female_logo_purple,
        male_logo_purple,
        selected_female_logo_purple,
        selected_male_logo_purple
      ];
      break;
    case "pink":
      color = [
        female_logo_pink,
        male_logo_pink,
        selected_female_logo_pink,
        selected_male_logo_pink
      ];
      break;
    case "light-blue":
      color = [
        female_logo_light_blue,
        male_logo_light_blue,
        selected_female_logo_light_blue,
        selected_male_logo_light_blue
      ];
      break;
  }
  return {
    female_logo: color[0],
    male_logo: color[1],
    selected_female_logo: color[2],
    selected_male_logo: color[3]
  };
}

export default getCurrentSchemeIcons;