import React from 'react'
import MainPage from './MainPage'
import Sidebar from './Sidebar'


const LayoutMain = () => {
  return (
    <div>
        <div>
            <Sidebar/>
            <MainPage />
        </div>
    </div>
  )
}

export default LayoutMain