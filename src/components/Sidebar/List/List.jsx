import React from "react";
import { connect } from "react-redux";

import "./List.scss";

import ListItem from "./ListItem";

function List({ step }) {
  return (
    <div className="List">
      <ul>
        <ListItem step={step} stepNumber={2} label="Name your assistant" />
        <ListItem step={step} stepNumber={3} label="Select styles" />
        <ListItem step={step} stepNumber={4} label="Create your account" />
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  step: state.step
});

export default connect(mapStateToProps)(List);