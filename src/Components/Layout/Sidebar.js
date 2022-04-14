import React from "react";
import Button from "../Sidebar/Button";
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div>
      <h2>
        <span className={classes.mentor}>Mentor</span>
        <span className={classes.plus}>Plus</span>
      </h2>
      <Button name="Home" />
      <Button name="Profile" />
      <Button name=" " />
      <Button name=" " />
    </div>
  );
};

export default Sidebar;
