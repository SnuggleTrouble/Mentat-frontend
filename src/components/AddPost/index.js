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
    setPostTitle("");
    setPostContent("");
    setPostCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
          <option value="Addiction">Addiction & Substance Abuse</option>
          <option value="ADHD">ADHD</option>
          <option value="Anger">Anger</option>
          <option value="Anxiety Disorders">Anxiety & Panic Attacks</option>
          <option value="Depression">Depression</option>
          <option value="Eating Disorders">Eating Disorders</option>
          <option value="OCD">Obsessive-compulsive Disorder</option>
          <option value="Insomnia">Insomnia</option>
          <option value="PTSD">Post-Traumatic Stress Disorder</option>
          <option value="Psychotic Disorders">Psychotic Disorders</option>
          <option value="Self-esteem">Self-esteem</option>
          <option value="Stress">Stress</option>
          <option value="Suicidal Feelings">Suicidal Feelings</option>
        </select>
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
}
