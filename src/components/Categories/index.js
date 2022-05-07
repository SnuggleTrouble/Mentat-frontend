import { useState } from "react";
import axios from "axios";
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
    <div className="flex">
    <div className="flex flex-col b p-20 gap-20">
    <h1 className="text-2xl font-medium text-stone-700">Choose a category to find posts associated with it.</h1>
    <div className="">
    <ul className="flex flex-row gap-3  flex-wrap">
        {categories.map(category => {
          return (
            <li className="">
              <button className="flex flex-row rounded-xl bg-emerald-400		 border-2 text-emerald-800 p-3 border-1 shadow-sm" onClick={() => fetchPosts(category.category)}>
                {category.category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
    <div>
    <ListOfPosts posts={posts} setPosts={setPosts} getPosts={() => {}} />
    </div>
    </div>
    </div>
  );
}
