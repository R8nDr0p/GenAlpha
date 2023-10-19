import "./Avatar.css";
import React from "react";

function Avatar(props) {
  return (
    <div
      className={`avatar ${props.className} w-full h-full flex justify-center`}
    >
      <img
        src={props.img}
        alt={` profile-picture__${props.user}`}
        className={"object-cover block rounded-3xl w-[250px] h-[250px]"}
      />
    </div>
  );
}

export default Avatar;
