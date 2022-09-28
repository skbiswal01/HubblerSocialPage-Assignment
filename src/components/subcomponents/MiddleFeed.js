import React, {useState}from 'react';
import "./middlefeed.css";
import {GoVerified} from "react-icons/go";
import {MdNextPlan} from "react-icons/md";
import {FiMoreHorizontal} from "react-icons/fi";
import About from './About';
import Post from './Post';

const MiddleFeed = () => {
   const [isShown, setisShown] = useState(false);
   
   const handleClick = (event) => {
      event.preventDefault();
      setisShown(current => !current);
     
    };
  return (
    <div className="middlefeedboxcontainer">
        <div className="middlefeedcoverpic">
             <div className="middlefeedcoverphoto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Nkqn1BoO2G4uEgeb1XmR9HFSdSNYjC0bAA&usqp=CAU" alt="CoverPhoto"/>
             </div>
             <div className="verifiedicon">
                <GoVerified />
             </div>
             <div className="coverphotodetails">
                 <div className="coverprofiledetails">
                    <div className="coverprofileimage">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSge2xMOiJRSlw6cmGPW0icm7WaV4zlunVb4ptWyXXi_9uA1zjGX2_7XWBttYGru8uQ0gs&usqp=CAU" alt="profile"/> 
                    </div>
                    <div className="coverprofilecontent"><p style={{fontWeight: "bold", fontSize: "16px"}}>Always look on Bright side of Life</p>
                    </div>
                 </div>
                 <div className="coverphotoeditoptions">
                    <div >
                       <button className="coverphotoeditbtn">Edit</button>
                    </div>
                    <div>
                      <MdNextPlan className="coverphotoediticon"/>
                    </div> 
                 </div>
             </div>
        </div>

        <div className="differentoption">
           <button onClick={(e)=>handleClick(e)}>POST</button>
          
           <button onClick={(e)=>handleClick(e)}>ABOUT</button>
          
           <button>PHOTOS</button>
           <button>EVENTS</button>
           <button>POLLS</button>
           <button><FiMoreHorizontal/></button>
        </div>

        <div>
          {
            isShown ? <Post/> : <About/>
          }
        </div>
    </div>


  )
}

export default MiddleFeed