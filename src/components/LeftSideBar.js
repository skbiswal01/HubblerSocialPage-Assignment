import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
    
}from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";
import {IoIosAddCircle} from "react-icons/io";

import "./leftsidebar.css";

const menuItem=[
    {
        
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        
        name:"About",
        icon:<FaUserAlt/>
    },
    {
       
        name:"Analytics",
        icon:<FaRegChartBar/>
    },
    {
        
        name:"Comment",
        icon:<FaCommentAlt/>
    },
    {
       
        name:"Product",
        icon:<FaShoppingBag/>
    },
    {
       
        name:"Product List",
        icon:<FaThList/>
    },
    {
        name:"Setting",
        icon:<AiFillSetting/>
    },
    {
        name:"More",
        icon:<IoIosAddCircle/>
    }
]

const LeftSideBar = ({children}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

const handleclick = ({e, item}) => {
     e.preventDefault();
     console.log(`clicked ${item.name} option`)
  }
  return (
    <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">hubbler</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                      <div className="link" key={index} activeclassname="active" onClick={(e)=>handleclick({e, item})}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                      </div>
                   ))
               }
           </div>           
    </div>
  )
}

export default LeftSideBar