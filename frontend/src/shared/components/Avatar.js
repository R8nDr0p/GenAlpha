import React from "react";

function Avatar(props) {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.img}
        alt={` profile-picture__${user} `}
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
}

export default Avatar;
