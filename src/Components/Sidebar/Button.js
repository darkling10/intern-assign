import React from 'react'
import classes from './Button.module.css'

const Button = (prop) => {
  return (
    <div>
        <button className={classes.button}>{prop.name}</button>
    </div>
  )
}

export default Button