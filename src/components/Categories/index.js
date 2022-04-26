import { useState } from "react";
import { Post } from "../Post/index.js";
import axios from "axios";
import "./Categories.module.css";
import { ListOfPosts } from "components";

const categories = [
  { id: "1", category: "Addiction" },
  { id: "2", category: "Anxiety" },
  { id: "3", category: "Burnout" },
  { id: "4", category: "Depression" },
  { id: "5", category: "Eating Disorders" },
  { id: "6", category: "OCD" },
  { id: "7", category: "PTSD" },
];

export function CategoryFilter(category, post) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async category => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/post/categories`;
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const data = { category };
    const result = await axios.post(url, data, config);
    setPosts(result.data);
  };

  return (
    <div>
      <ul>
        {categories.map(category => {
          return (
            <li>
              <button onClick={() => fetchPosts(category.category)}>
                {category.category}
              </button>
            </li>
          );
        })}
      </ul>
      <ListOfPosts posts={posts} setPosts={setPosts} getPosts={() => {}} />
    </div>
  );
}
