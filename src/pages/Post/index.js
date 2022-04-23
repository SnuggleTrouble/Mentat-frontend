import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import {
  AddComment,
  Comment,
  ListOfComments,
} from "components";
import styles from "./Post.module.css";
import axios from "axios";

export function PostPage({comments, setComments, getComments}) {
    const navigate = useNavigate();
    const [comment, setComment] = useState([]);
    // Acquire the authorization context to get the user
    const { user } = useContext(AuthContext);

// Function to acquire the posts from the backend
const getComments = async () => {
    // Endpoint for acquiring posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/post`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setComments(result.data);
  };

   // useEffect is used when doing API calls
   useEffect(() => {
    getComments();
  }, []);

  !user && navigate("/login");
  return (
    <div>
      {user ? (
        <div>
          <h1>Home</h1>
          <AddComment getComments={getComments} setPosts={setComments} />
          <ListOfComments comments={comments} setComment={setComments} getComments={getComments} />
          <code>{JSON.stringify(user)}</code>
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}
