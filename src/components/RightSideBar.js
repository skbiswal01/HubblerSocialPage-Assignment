import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import "./rightsidebar.css";

const RightSideBar = () => {
  return (
    <div className="container">
      <div  className="sideNav">
        <div className="link1" activeclassname="active2">
            <div className="icon"><FiSearch/></div>                   
        </div>
        <div className="link1" activeclassname="active2">
            <div className="icon"><BiMessageDetail/></div>                   
        </div>
        <div className="link1" activeclassname="active2">
            <div className="icon"><AiTwotoneCalendar/></div>                   
        </div>
       
      </div>
  
    </div>
  );
};

export default RightSideBar;
