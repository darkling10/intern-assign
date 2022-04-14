import React from "react";
import Card from "./Card";


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
  
  

  const headtag = {"textAlign":"left"}

  return (
    <div>
     <h3 style={headtag}>Select Date</h3>
      
      <Card data={DUMMY_DATA}/>
      
    </div>
  );
};

export default Dashboard;
