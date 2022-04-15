import React, { useEffect,useState} from "react";
import Card from "./Card";


const Dashboard = () => {
  const [data,setData]=  useState([]);;

  useEffect(() => {
    fetch("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json")
    .then(response => response.json())
        
    .then(data =>setData(prevState => {
      
      return [...prevState, ...data];
    }))
  },[])
  
  

  const headtag = {"textAlign":"left"}

  return (
    <div>
     <h3 style={headtag}>Select Date</h3>
      
      <Card data={data}/>
      
    </div>
  );
};

export default Dashboard;
