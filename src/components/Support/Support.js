import React, { useState, useContext } from "react";
import { AuthContext } from "context";
import axios from "axios";

export function Support({ support, id }) {
  // Acquire the authorization context to get the user
  const { user } = useContext(AuthContext);
  const [counter, setCounter] = useState(support);
  const [userId, setUserId] = useState(user._id);

  const supportHandler = async () => {
    console.log(id)
    // Endpoint for EDITING posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}/support`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    await setCounter(previousCount => [...previousCount, userId]);
    axios.put(url, { support: counter }, config);
  };

  return (
    <div>
      {console.log(counter)}
      <h1 className="counter">{counter.length}</h1>

      <button className="supportCount" onClick={supportHandler}>
        Support
      </button>
    </div>
  );
}
