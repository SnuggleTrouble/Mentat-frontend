import { useState } from "react";
import "./Post.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Support } from "components/Support/Support";

// Receive the id, the content and the setPost function.
export function Post({
  id,
  title,
  content,
  category,
  support,
  setPosts,
  post,
  getPosts,
}) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(title);
  const [newPostCategory, setNewPostCategory] = useState(category);
  const [newPostContent, setNewPostContent] = useState(content);
  const navigate = useNavigate();

  const handleShowComment = () => {
    return navigate(`/post/${id}`);
  };

  // handle Post deletion
  const handleDelete = () => {
    (async function () {
      // Endpoint for DELETING posts from the backend
      const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}`;
      // Request config that is going to hold the authorization
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      // make the request
      const result = await axios.delete(url, config);

      getPosts();
    })();
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll(previousValue => {
      return !previousValue;
    });
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSave = () => {
    // Function to EDIT the posts from the backend
    (async function () {
      // Endpoint for EDITING posts from the backend
      const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}`;
      // Request config that is going to hold the authorization
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      // make the request
      const result = await axios.put(
        url,
        {
          title: newPostTitle,
          content: newPostContent,
          category: newPostCategory,
        },
        config
      );
      getPosts();
    })();

    handleCancel();
  };

  return (
    <>
      <div className="post">
        <div className="post_input">
          <div className="username">{`${post.user.userName}`}</div>

          {edit ? (
            <input
              value={newPostTitle}
              onChange={event => setNewPostTitle(event.target.value)}
            />
          ) : (
            <p>{title}</p>
          )}

          {edit ? (
            <textarea
              value={newPostContent}
              onChange={event => setNewPostContent(event.target.value)}
            />
          ) : showAll ? (
            <p>{content}</p>
          ) : (
            <p>
              {content.length > 100
                ? `${content.substring(0, 100)}...`
                : content}
            </p>
          )}

          {edit ? (
            <select
              value={newPostCategory}
              onChange={event => setNewPostCategory(event.target.value)}
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
          ) : (
            <p>{category}</p>
          )}

          {edit ? (
            <div className="post_actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div className="post_actions">
              {content.length > 100 && (
                <button onClick={handleShowAll}>
                  {showAll ? "Read less" : "Read more"}
                </button>
              )}
              <button onClick={handleShowComment}>Comment</button>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
        </div>
      </div>
      <Support support={support} id={id} />
    </>
  );
}
