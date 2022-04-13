import React from 'react'
import Bookdemo from '../MainPage/Bookdemo'
import Navbar from '../MainPage/Navbar'
import classes from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={classes.container}>
        <div className={classes.navbar}>
            <Navbar />
          </div>
          <div>
            <Bookdemo />
        </div>
    </div>
  )
}

export default MainPage