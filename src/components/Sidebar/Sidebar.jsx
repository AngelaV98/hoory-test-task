import React from "react";

import "./Sidebar.scss";

import Header from "./Header";
import List from "./List";

function Sidebar() {
  return (
    <nav className="Sidebar">
      <div>
        <Header />
        <List />
      </div>
    </nav>
  );
}

export default Sidebar;
