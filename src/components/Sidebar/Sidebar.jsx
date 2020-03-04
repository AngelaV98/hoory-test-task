import React from "react";

import "./Sidebar.scss";

import Header from "../Header";
import List from "../List";

import logo from "../../assets/hoory logo white.png";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div>
        <Header />
        <List />
      </div>
    </div>
  );
}

export default Sidebar;