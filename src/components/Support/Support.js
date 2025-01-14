import React, { useState, useContext } from "react";
import { AuthContext } from "context";
import axios from "axios";
import like from "./heart.png"

export function Support({ support, id }) {
  // Acquire the authorization context to get the user
  const { user } = useContext(AuthContext);
  const [counter, setCounter] = useState(support);
  const [userId, setUserId] = useState(user._id);

  const supportHandler = async () => {
    // Endpoint for EDITING posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}/support`;
    const urlUnsupport = `${process.env.REACT_APP_BACKEND_URL}/post/${id}/unsupport`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    if (!counter.includes(userId)) {
      await setCounter(previousCount => [...previousCount, userId]);
      axios.put(url, { support: userId }, config);
    } else {
      let counterCopy = [...counter];
      const filterId = counterCopy.filter(c => {
        return c !== userId;
      });
      setCounter(filterId);
      axios.put(urlUnsupport, { support: userId }, config);
    }
  };

  return (
    <div className="py-2 px-5 flex flex-row bg-gray-100 rounded-xl justify-center gap-2 ">
      <h1 className=" ">{counter.length}</h1>

      <button className=" rounded-lg " onClick={supportHandler}>
        <img className="" src={like} width="20px" alt=""></img>
      </button>
    </div>
  );
}
