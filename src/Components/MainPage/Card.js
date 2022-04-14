import React, { useState } from "react";
import Carditems from "./Carditems";
import classes from "./Card.module.css";
import Slotitems from "./Slotitems";

const Card = (props) => {
  let i = 0;
  let j = 0;

  const [enteredData, setenteredData] = useState({
    date: "",
    available: [
      {
        hour: 0,
        min: 0,
      },
      {
        hour: 0,
        min: 0,
      },
    ],
  },);


  const [isSlotvisible, setisSlotvisible] = useState(false);

  const dataHandler = (data) => {
    setisSlotvisible(true);
    setenteredData(data);
  };

  const carditems = props.data.map((item) => (
    <Carditems key={i++} data={item} setData={dataHandler} />
  ));

  console.log(enteredData);
  

  const timeSlots = enteredData.available.map((item)=>(
    <Slotitems key={j++} data={item}></Slotitems>
  ))
 
  return (
    <div className={classes.container}>
      <div className={classes.cards}>{carditems}</div>
      {isSlotvisible && <h3>Select Slot</h3>}
      {isSlotvisible && <div className={classes.cards}>{timeSlots}</div>}

      {isSlotvisible && <button className={classes.submit}>Proceed to Pay</button>}
    </div>
  );
};

export default Card;
