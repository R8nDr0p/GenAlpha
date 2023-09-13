import React from "react";
import "./Userlist.css";
import UserItem from "./UserItem";

function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              placeCount={user.places}
              user={user.name}
              image={user.img}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
