import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

function UserItem({ placeCount, user, image }) {
  return (
    <div>
      <li className="user-item">
        <Card className="user-item__content text-amber-200 hover:text-slate-700 hover:bg-amber-300 transition-all duration-75">
          <Link to={`/{props.id}/places`}>
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
