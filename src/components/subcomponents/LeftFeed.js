import React from 'react'
import {AiOutlineArrowLeft, AiOutlineRight} from "react-icons/ai";
import "./leftfeed.css";
const LeftFeed = () => {
  return (
    <div className='leftfeedboxcontainer'>
        <div className="leftfeedboxicon1">
            <span> <AiOutlineArrowLeft/> </span><span>Back to channel</span>
            
        </div>
         <div className='leftfeedboxcontent'>
            <div className="leftfeedboxcontent1">
                <div>
                    <p>About the event</p>
                </div>
                <div>
                    <AiOutlineRight/>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore facere accusantium architecto voluptates assumenda voluptatem quam exercitationem maxime placeat nostrum?</p>
         </div>
         
    </div>
  )
}

export default LeftFeed