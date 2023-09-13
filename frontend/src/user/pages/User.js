import React from "react";
import UserList from "../components/UserList";

function User() {
  const USERS = [
    {
      id: "u1",
      name: "RainDrop",
      places: "3",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div>
      <h1>This is the user Page</h1>
      <p>this lists all active users of the application</p>
      <UserList items={USERS} />
    </div>
  );
}

export default User;
