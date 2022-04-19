import { useState } from "react";
import axios from "axios";
import "./AddPost.module.css";

// Add posts is for getting new posts when adding a new one
export function AddPost({ getposts }) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState();

  const handleSubmit = async event => {
    event.preventDefault();
    // Data to send in the request body
    const data = {
      title: postTitle,
      content: postContent,
      category: postCategory,
    };
    // url of the endpoint for posts
    const url = `${process.env.REACT_APP_BACKEND_URL}/post`;
    // request configuration for adding a header with authorization
    const config = {
      headers: {
        // read token from local storage and send it with request
        authorization: localStorage.getItem("token"),
      },
    };
    // make a request with axios
    const post = await axios.post(url, data, config);
    // get posts from the backend
    getposts();
  };
  return (
    <form onSubmit={handleSubmit} className="post">
      <div className="post_content">
        <input
          value={postTitle}
          onChange={event => setPostTitle(event.target.value)}
        />
        <textarea
          value={postContent}
          onChange={event => setPostContent(event.target.value)}
        />
        <select
          value={postCategory}
          onChange={event => setPostCategory(event.target.value)}
        >
          <option value="addiction">Addiction</option>
          <option value="anxiety">Anxiety</option>
          <option value="burnout">Burnout</option>
          <option value="depression">Depression</option>
          <option value="eatingDisorders">Eating Disorders</option>
          <option value="ocd">OCD</option>
          <option value="ptsd">PTSD</option>
        </select>
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
}
