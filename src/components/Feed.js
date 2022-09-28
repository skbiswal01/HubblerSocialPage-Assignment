import React from 'react'
import LeftFeed from './subcomponents/LeftFeed';
import MiddleFeed from './subcomponents/MiddleFeed';
import RightFeed from './subcomponents/RightFeed';
import "./feed.css";
const Feed = () => {
  return (
    <div className="feedcontainer">
         
         <div className="leftfeedcontainer">
            <LeftFeed />
         </div>
         <div className="middlefeedcontainer">
            <MiddleFeed/>
         </div>
         <div className="rightfeedcontainer">
            <RightFeed/>
         </div>
    </div>
  )
}

export default Feed