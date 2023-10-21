import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

function UserItem({ placeCount, user, image, id }) {
  return (
    <div>
      <li className="user-item">
        <Card className="user-item__content">
          <Link to={`/${id}/places`}>
            <Avatar img={image} className={"user-item__image "} user={user} />
            <div className="user-item__info">
              <h2 className="text-xl font-bold">{user}</h2>
              <h3>
                {placeCount} {placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    </div>
  );
}

export default UserItem;
