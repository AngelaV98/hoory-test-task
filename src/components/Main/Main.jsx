import React from "react";

import "./Main.scss";

function Main(props) {
  return <div className="Main">{props.children}</div>;
}

export default Main;