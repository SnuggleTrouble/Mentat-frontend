import { useState } from "react";
import { Post } from "../Post/index.js";
import axios from "axios";
import styles from "./Categories.module.css";
import { ListOfPosts } from "components";

const categories = [
  { id: "1", category: "Addiction" },
  { id: "2", category: "ADHD" },
  { id: "3", category: "Anger" },
  { id: "4", category: "Anxiety Disorders" },
  { id: "5", category: "Depression" },
  { id: "6", category: "Eating Disorders" },
  { id: "7", category: "OCD" },
  { id: "8", category: "Insomnia" },
  { id: "9", category: "PTSD" },
  { id: "10", category: "Psychotic Disorders" },
  { id: "11", category: "Self-esteem" },
  { id: "12", category: "Stress" },
  { id: "13", category: "Suicidal Feelings" },
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
