import React from "react";

import "./Sidebar.scss";
import Header from "../Header/Header";
import List from "../List";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div>
        <Header />
        <List />
      </div>{" "}
    </div>
  );
}

export default Sidebar;