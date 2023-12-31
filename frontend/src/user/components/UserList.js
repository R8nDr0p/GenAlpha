import React from "react";
import "./Userlist.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

function UserList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
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
