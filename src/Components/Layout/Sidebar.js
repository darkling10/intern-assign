import React from "react";
import Button from "../Sidebar/Button";
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div>
      
      <Button name="Home" />
      <Button name="Profile" />
      <Button name=" " />
      <Button name=" " />
    </div>
  );
};

export default Sidebar;
