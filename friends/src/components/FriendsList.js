import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friends from "./Friends";
import AddFriends from "./AddFriends";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="friendsList">
      <div className="addFriend">
        <AddFriends setFriends={setFriends} />
      </div>
      <div className="friend">
        {friends.map((friend) => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;