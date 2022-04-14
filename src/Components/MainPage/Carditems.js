import React from 'react'
import classes from './Carditems.module.css'

const Carditems = (props) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    console.log(props.data.date)
    let date = new Date(props.data.date)
    let day = days[date.getDay()]
    let month =months[date.getMonth()]


  return (
    <div className={classes.container}>
        <button className={classes.cardbutton}>
        <span className={classes.subhead}>{day}</span><br></br>
        <span>{date.getDate()}</span><br></br>
        <span className={classes.subhead}>{month}</span>
        </button>


    </div>
  )
}

export default Carditems