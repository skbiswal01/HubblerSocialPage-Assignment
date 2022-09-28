import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";

import "./About.css";
const About = () => {
  const [value, setValue] = useState(true);
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quidem velit tempora nisi reprehenmagni voluptatem minima ducimus maiores error ipsum nulla, aut perferendis neque. Esse, sequi? Minima alias error porro esse id!"
  );

  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
    localStorage.setItem("About", JSON.stringify(content));
  };

  const handleclick = (e) => {
    e.preventDefault();
    setValue(!value);
  };
  return (
    <div className="aboutsection">
      <div className="AboutDescription">
        <div className="descriptioneditor">
          <div>
            <p style={{ fontWeight: "bold", paddingBottom: "5px" }}>
              Description
            </p>
          </div>
          <div>
           <GrEdit style={{height: "20px",width: "20px"}} onClick={(e) => handleclick(e)} />
          </div>
        </div>
        <div>
          <textarea
            disabled={value}
            id="noter-text-area"
            name="textarea"
            value={content}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className="AboutDescription">
        <p style={{ fontWeight: "bold", paddingBottom: "5px" }}>tags</p>
        <div className="abouttagnames">
          <div>Media</div>
          <div>Communication</div>
        </div>
      </div>

      <div className="AboutDescription">
        <p style={{ fontWeight: "bold", paddingBottom: "5px" }}>Admins</p>
        <div className="rightprofilemember">
          <div className="rightprofileimage">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU"
              alt="profilepic"
            />
          </div>
          <div className="rightprofileimage1">
            <p>You</p>
            <p style={{ color: "gray" }}>Creator</p>
          </div>
        </div>
        <div className="rightprofilemember">
          <div className="rightprofileimage">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBesL0m_3qVjH_8XEvCtEXfGoMbqHJnLhCtQ&usqp=CAU"
              alt="profilepic"
            />
          </div>
          <div className="rightprofileimage1">
            <p>Anshul Gupta</p>
            <p style={{ color: "gray" }}>Creator</p>
          </div>
        </div>
      </div>
      <div className="AboutDescription">
        <div className="admindescription1">
          <p>Music - 8 oct 2022</p>
          <p>Channel Name Updated</p>
        </div>
        <div className="admindescription1">
          <p>Music - 8 oct 2022</p>
          <p>Channel created</p>
        </div>
        <div className="admindescription1">
          <button className="viewallrecent">change channel info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
