import { useState } from "react";
import "./Post.module.css";
import axios from "axios";

// Receive the id, the content and the setPost function
export function Post({ id, title, content, setPosts, post, getPosts }) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(title);
  const [newPostContent, setNewPostContent] = useState(content);

  // handle Post deletion
  const handleDelete = () => {
    setPosts((previousPosts) => {
      // return the new array or filtered Posts
      return previousPosts.filter((post) => {
        // a Post is gonna stay in the array if its id is different from the the id of the current Post
        return post.id !== id;
      });
    });
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll((previousValue) => {
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
  ( async function () {
    // Endpoint for EDITING posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/post/${id}`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.put(url, {title:newPostTitle, content:newPostContent},config);

    getPosts()
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
            onChange={(event) => setNewPostTitle(event.target.value)}
          />
        ) : (
          <p>{title}</p>
        )}

        {edit ? (
          <textarea
            value={newPostContent}
            onChange={(event) => setNewPostContent(event.target.value)}
          />
        ) : showAll ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </p>
        )}

        {edit ? (
          <div className="post_actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="post_actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            {content.length > 100 && (
              <button onClick={handleShowAll}>
                {showAll ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>
    </div> </>
  );
}
