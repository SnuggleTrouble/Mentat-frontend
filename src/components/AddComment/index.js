import { useContext, useState } from "react";
import axios from "axios";
import "./Comments.module.css";
import { AuthContext } from "context";

export function AddComment({ id, getComments, updateComments, individualPost, setIndividualPost }) {
  const [commentContent, setCommentContent] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Data to send in the request body
    const data = {
      content: commentContent,
    };
    // url of the endpoint for posts
    const url = `${process.env.REACT_APP_BACKEND_URL}/comment/${id}`;
    // request configuration for adding a header with authorization
    const config = {
      headers: {
        // read token from local storage and send it with request
        authorization: localStorage.getItem("token"),
      },
    };
    // make a request with axios
    const comment = await axios.post(url, data, config);
    const postCopy = JSON.parse(JSON.stringify(individualPost))
    postCopy.comments.push(comment.data)
    setIndividualPost(postCopy)
    console.log(comment)
    // get posts from the backend
    /* setCommentContent("") */
    /* updateComments(user.userName, commentContent) */
  };

  return (
    <form onSubmit={handleSubmit} className="comment">
      <div>
        <textarea
          value={commentContent}
          onChange={(event) => setCommentContent(event.target.value)}
        />
        <button type="submit">Create Comment</button>
      </div>
    </form>
  );
}
