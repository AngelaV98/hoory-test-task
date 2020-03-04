import React from "react";

import "./List.scss";

import step from "../../assets/step.svg";

function List(props) {
  return (
    <div className="List">
      <ul>
        <li>
          <img src={step} alt="Step circle" />
          <span>Name your assistant</span>
        </li>
        <li>
          <img src={step} alt="Step circle" />
          <span>Select styles</span>
        </li>
        <li>
          <img src={step} alt="Step circle" />
          <span>Create your account</span>
        </li>
      </ul>
    </div>
  );
}

export default List;