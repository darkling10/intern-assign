import React from "react";
import classes from "./Slotitems.module.css";

const Slotitems = (props) => {
  console.log(props.data);

  // const button = props.data.map((item)=>(
  //     <button>{`${item.hour}:${item.min} - ${item.hour+1}:${item.min} `}</button>
  // ))
  let button;

  if (props.data.min === 0) {
    button = (
      <button className={classes.button}>{`${props.data.hour} PM - ${props.data.hour + 1} PM `}</button>
    );
  }

  else{
    button = (<button className={classes.button}>{`${props.data.hour} :${props.data.min}PM - ${
      props.data.hour + 1
    }:${props.data.min}PM `}</button>)
  }

  return (
    <div className={classes.container}>
      <div>{button}</div>
    </div>
  );
};

export default Slotitems;
