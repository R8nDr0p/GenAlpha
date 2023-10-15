import "./Avatar.css";
import React from "react";

function Avatar(props) {
  return (
    <div className={`avatar ${props.className}`}>
      <img src={props.img} alt={` profile-picture__${props.user} `} />
    </div>
  );
}

export default Avatar;
