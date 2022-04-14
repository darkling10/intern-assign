import React from "react";
import Carditems from "./Carditems";
import classes from "./Dashboard.module.css";

const DUMMY_DATA = [
  {
    date: "2022-03-22T00:00:00.000Z",
    available: [
      {
        hour: 6,
        min: 30,
      },
      {
        hour: 7,
        min: 0,
      },
    ],
  },
  {
    date: "2022-03-23T00:00:00.000Z",
    available: [
      {
        hour: 5,
        min: 0,
      },
      {
        hour: 7,
        min: 0,
      },
    ],
  },
  {
    date: "2022-03-24T00:00:00.000Z",
    available: [
      {
        hour: 5,
        min: 0,
      },
      {
        hour: 7,
        min: 0,
      },
    ],
  },
  {
    date: "2022-03-25T00:00:00.000Z",
    available: [
      {
        hour: 2,
        min: 0,
      },
      {
        hour: 4,
        min: 0,
      },
    ],
  },
];

const Dashboard = () => {
  let i=0
  const carditems = DUMMY_DATA.map((item)=>(
    
    <Carditems key={i++} data={item}/>
  ))

  return (
    <div>
      <h3>Select Date</h3>
      <div className={classes.cards}>
      {carditems}
      </div>
    </div>
  );
};

export default Dashboard;
