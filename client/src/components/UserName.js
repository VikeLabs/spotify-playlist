import React from "react";

const UserName = ({ username }) => {
  return (
    <>
      <h3>UserName</h3>
      {username && <div>{username}</div>}
    </>
  );
};

export default UserName;
