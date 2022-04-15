import React from 'react'
import Bookdemo from '../MainPage/Bookdemo'
import classes from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={classes.container}>
        <div className={classes.navbar}>
            
            <Bookdemo />
        </div>
    </div>
  )
}

export default MainPage