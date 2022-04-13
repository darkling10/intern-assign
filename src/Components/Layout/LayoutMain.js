import React from "react";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import classes from "./LayoutMain.module.css";

const LayoutMain = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.mainpage}>
        <MainPage />
      </div>
    </div>
  );
};

export default LayoutMain;
