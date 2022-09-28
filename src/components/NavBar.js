import React from 'react';
import {FiHome, FiSearch, FiBell} from "react-icons/fi";

import "./navbar.css";
const NavBar = () => {
  return (
    <div className='navbar'>
        <img className="logoicon" src="hubbler.jpg" alt="hubbler" />
        
        <div className="centernavbar">
            <div className="homenavicon">
               <FiHome/>
            </div>
            
            <p>Channels</p>
            <p>Groups</p>
            <p>Events</p>
            <p>Polls</p>
        </div>

        <div className='searchnavbar'>
             <div className="searchnavbaricon">
                <FiSearch />
             </div>
             <div className="searchnavbarinput">
                <input type="text" placeholder="Global Search"></input>
             </div> 
             <div className="profilenavbaricon">
               <FiBell />
            </div>
            <div className="profilenavbarimg">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSge2xMOiJRSlw6cmGPW0icm7WaV4zlunVb4ptWyXXi_9uA1zjGX2_7XWBttYGru8uQ0gs&usqp=CAU" alt="profile"/>   
            </div>   
        </div>

    </div>
  )
}

export default NavBar