import React, { useState } from "react";
import Carditems from "./Carditems";
import classes from "./Card.module.css";

const Card = (props) => {
  let i = 0;
    let j=0;
  const [enteredDate, setenteredDate] = useState();
  const [enteredTime, setenteredTime] = useState();

  const carditems = props.data.map((item) => (
    <Carditems key={i++} data={item} />
  ));

  const timeSlots = props.data.map((item) => (
      item.available.map((slot)=>(
          <h4 key={j++}>{slot.hour}</h4>
      ))
  ));

  return (
    <div className={classes.container}>
      <div className={classes.cards}>{carditems}</div>
      <h3>Select Slot</h3>
      <div className={classes.card}>{timeSlots}</div>
    </div>
  );
};

export default Card;
