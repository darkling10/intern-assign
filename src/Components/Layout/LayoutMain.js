import React, { Fragment } from "react";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";
import classes from "./LayoutMain.module.css";

const LayoutMain = () => {
  return (
    <Fragment>
    <div>
        <h2 className={classes.headtag}>
          <span className={classes.mentor}>Mentor</span>
          <span className={classes.plus}>Plus</span>
        </h2>
      </div>
        <div className={classes.layout}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.mainpage}>
        <MainPage />
      </div>
    </div>
    </Fragment>
  );
};

export default LayoutMain;
