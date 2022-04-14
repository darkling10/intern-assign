import React from 'react'
import classes from './Carditems.module.css'

const Carditems = (props) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


    let date = new Date(props.data.date)
    let day = days[date.getDay()]
    let month =months[date.getMonth()]

    const giveData = () =>{
      props.setData(props.data)
      
    }

  return (
    <div className={classes.container} onClick={props.onClick}>
        <button className={classes.cardbutton} onClick={giveData}>
        <span className={classes.subhead}>{day}</span><br></br>
        <span>{date.getDate()}</span><br></br>
        <span className={classes.subhead}>{month}</span>
        </button>


    </div>
  )
}

export default Carditems