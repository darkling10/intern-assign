import React from "react";
import Dashboard from "./Dashboard";
import classes from "./Bookdemo.module.css";

const Bookdemo = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Book Demo Session Slot</h2>
      <div className={classes.border}>
        <div className={classes.border_blue}></div>
        <div className={classes.border_red}></div>
      </div>

      <Dashboard />
    </div>
  );
};

export default Bookdemo;
