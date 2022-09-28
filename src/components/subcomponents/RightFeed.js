import React, {useMemo, useState} from "react";
import {AiOutlineRight} from "react-icons/ai";
import "./rightfeed.css";

const userList = [
    {
        name : "You",
        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
        designation: "Software Developer"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Software lead"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Project Manager"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Project lead"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Product Manager"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "CEO"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Tech Head"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "CFO"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Operational Manager"
    },
    {
      name : "Anshul Gupta",
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU",
      designation: "Operational"
    },

]
const RightFeed = () => {
  const [users] = useState(userList);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);
  const showMore = () => {
    if (numberOfitemsShown + 3 <= users.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 3);
    } else {
      setNumberOfItemsToShown(users.length);
    }
  };

  const itemsToShow = useMemo(() => {
    return users.slice(0, numberOfitemsShown).map((user, index) => {
      return <div key={index} className="rightprofilemember">
                <div className="rightprofileimage">
                    <img src={user.imgurl} alt="profilepic"/> 
                </div>
                <div className="rightprofileimage1">
                  <p >{user.name}</p>
                  <p style={{color: "gray"}}>{user.designation}</p>
                </div>
           </div>
    });
  }, [users, numberOfitemsShown]);

  return (
    <div className="rightfeedboxcontainer">

      <div className="rightfeedboxcontent1">
           <div className="rightfeedboxhead">
                <div>
                    <p>Member | {users.length}</p>
                </div>
                <div>
                    <AiOutlineRight/>
                </div>
           </div>
           <div>
              <ul>{itemsToShow.length ? itemsToShow : "Loading..."}</ul>
              <div style={{textAlign: "center", marginTop: "10px"}}>
                 <button className="viewallrecent" onClick={showMore}>{`+${users.length - itemsToShow.length} more`}</button>
              </div>
              
           </div>
       
      </div>

      <div className="rightfeedboxcontent1">
           <div className="rightfeedboxhead">
             <div>
                <p>Upcoming Events</p>
             </div>
             <div>
                <AiOutlineRight/>
             </div>
           </div>
           <div className="upcomingeventbox">
               <img src="https://i.pinimg.com/736x/b9/b6/81/b9b6813ce7e4d62bd4127f482eeffac8--tv-design-booth-design.jpg" alt="events"/>
           </div>
           <div className="upcomingeventsdetails">
              <p>THU 27 JUL - 30 JUL</p>
              <p style={{fontWeight: "bold", color: "black"}}>Press meet 2022</p>
              <p>Hotel Utah Saioon, Sans Fransico, California</p>
           </div>
           <div className="upcomingeventspermission">
               <div>8 people are going</div>
               <div style={{color: "blue"}}>Are you going</div>
           </div>
      </div>

      <div className="rightfeedboxcontent1">
          <div className="rightfeedboxhead">
             <div>
                <p>Recent Activities</p>
             </div>
          </div>
          
          <div className="recentactivitycontent">
              <div className="rightfeedrecentact">
                 
                  <div>
                    <p>You gave anshul admin rights</p>
                    <p>5 mins ago</p>
                  </div>
              </div>
              <div className="rightfeedrecentact">
                  
                  <div>
                    <p>You gave anshul admin rights</p>
                    <p>5 mins ago</p>
                  </div>
              </div>
              <div className="rightfeedrecentact">
                  
                  <div>
                    <p>You gave anshul admin rights</p>
                    <p>5 mins ago</p>
                  </div>
              </div>
          </div>
          
          <div style={{textAlign: "center"}}>
              <button className="viewallrecent">View All</button>
          </div>
          
      </div>
    </div>
  );
};

export default RightFeed;
