import React from "react";

import "./Header.scss";

import logo from "../../assets/hoory logo white.png";

function Header(props) {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} />
      </div>
    </div>
  );
}

export default Header;