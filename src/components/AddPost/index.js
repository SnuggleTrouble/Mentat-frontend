import { useState } from "react";
import axios from "axios";

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
    <form className=" p-20 " onSubmit={handleSubmit}>
      <h1 className="text-2xl">What is mental health?</h1>
      <p className="mb-2">
        Mental health includes our emotional, psychological, and social
        well-being. It affects how we think, feel, and act. It also helps
        determine how we handle stress, relate to others, and make healthy
        choices. Mental health is important at every stage of life, from
        childhood and adolescence through adulthood.
      </p>
      <p className="mb-5">
        Although the terms are often used interchangeably, poor mental health
        and mental illness are not the same. A person can experience poor mental
        health and not be diagnosed with a mental illness. Likewise, a person
        diagnosed with a mental illness can experience periods of physical,
        mental, and social well-being.
      </p>
      <h1 className=" text-2xl">
        Why is mental health important for overall health?
      </h1>
      <p className="mb-5">
        Mental and physical health are equally important components of overall
        health. For example, depression increases the risk for many types of
        physical health problems, particularly long-lasting conditions like
        diabetes, heart disease, and stroke. Similarly, the presence of chronic
        conditions can increase the risk for mental illness
      </p>
      <h1 className=" text-2xl">Can your mental health change over time?</h1>
      <p className="mb-5">
        Yes, it's important to remember that a person's mental health can change
        over time, depending on many factors. When the demands placed on a
        person exceed their resources and coping abilities, their mental health
        could be impacted. For example, if someone is working long hours, caring
        for a relative, or experiencing economic hardship, they may experience
        poor mental health.
      </p>
      <h1 className=" text-2xl">Can your mental health change over time?</h1>
      <p>
        There is no single cause for mental illness. A number of factors can
        contribute to risk for mental illness, such as
      </p>
      <ul className="mb-10">
        <li>
          Early adverse life experiences, such as trauma or a history of abuse
          (for example, child abuse, sexual assault, witnessing violence, etc.)
        </li>
        <li>
          Experiences related to other ongoing (chronic) medical conditions,
          such as cancer or diabetes
        </li>
        <li>Biological factors or chemical imbalances in the brain</li>
        <li>Use of alcohol or drugs</li>
        <li>Having feelings of loneliness or isolation</li>
      </ul>

      <div className=" border-2 border-emerald-300 p-20 bg-white rounded-xl flex flex-col justify-start">
        <h1 className="mb-5 text-stone-600 font-bold text-xl">
          Share Your Thoughts
        </h1>
        <input
          className="border-2 p-2 rounded-lg mb-5"
          placeholder="Post title"
          value={postTitle}
          onChange={event => setPostTitle(event.target.value)}
        />
        <textarea
          className="border-2 p-2 rounded-lg mb-5"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={event => setPostContent(event.target.value)}
        />
        <select
          className="border-2 p-2 rounded-lg mb-5 text-stone-500"
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
        <button
          className="p-2 rounded-xl bg-emerald-400 w-60 text-white font-bold"
          type="submit"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}
