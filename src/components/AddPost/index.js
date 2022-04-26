import { useState } from "react";
import axios from "axios";
import "./AddPost.module.css";

// Add posts is for getting new posts when adding a new one
export function AddPost({ getPosts }) {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("");

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
    getPosts();
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
          <option value="" selected disabled hidden>
            Select Category
          </option>
          <option value="Addiction">Addiction</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Burnout">Burnout</option>
          <option value="Depression">Depression</option>
          <option value="Eating disorders">Eating Disorders</option>
          <option value="OCD">OCD</option>
          <option value="PTSD">PTSD</option>
        </select>
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
}
