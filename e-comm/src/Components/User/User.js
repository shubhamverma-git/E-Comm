import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams(); //useParams is used to get data from params and made the component dynamic
  return (
    <div className="bg-gray-700 text-white text-3xl p-4">User : {userId}</div>
  );
}

export default User;
