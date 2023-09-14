import React from "react";
import "./UserItem.css";

function UserItem({ id, placeCount, user, image }) {
  return (
    <div>
      <li className="user-item">
        <div className="user-item__content">
          <div className="user-item__image">
            <img src={image} alt={` profile-picture__${user} `} />
          </div>
          <div className="user-item__info">
            <h2>{user}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </div>
      </li>
    </div>
  );
}

export default UserItem;
