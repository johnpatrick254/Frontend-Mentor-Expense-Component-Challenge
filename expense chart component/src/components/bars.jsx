/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Bars= (props)=>{
const [visible,setVisible]=useState(false)

    return <div className={`chart-content-bar-day`}>
          
          <div className={`bar `}>
          <div className={`chart-content-bar-amount ${visible && "visible"}`}>
           <h1>${props.amount}</h1>
          </div>
          <div className={`${props.day} ${visible && "selected"}`} onMouseOver={()=>{
            setVisible(true)
          }} onMouseLeave={()=>{
            setVisible(false)
          }} style={{height:`${(props.amount/props.highest)*100}%`}} >
            
          </div>
          <p>{props.day}</p>
          </div>
        </div>
       
     
    
}