import { useState } from "react";
import "./Comment.module.css";
import axios from "axios";

// Receive the id, the content and the setComment function
export function Comment({
  id,
  content,
  setComment,
  comment,
  getComments,
  deleteComment,
}) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newCommentContent, setNewCommentContent] = useState(content);

  // handle Comment deletion
  const handleDelete = commentId => {
    (async function () {
      // Endpoint for DELETING comments from the backend
      const url = `${process.env.REACT_APP_BACKEND_URL}/comment/${id}`;
      // Request config that is going to hold the authorization
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };

      // Make the request
      const result = await axios.delete(url, config);
      console.log(result.data);
      deleteComment(commentId);
    })();
  };

  // Handle the change of variable showAll
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
    // Function to EDIT the comments from the backend
    (async function () {
      // Endpoint for EDITING comments from the backend
      const url = `${process.env.REACT_APP_BACKEND_URL}/comment/${id}`;
      // Request config that is going to hold the authorization
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      // Make the request
      const result = await axios.put(
        url,
        {
          content: newCommentContent,
        },
        config
      );
      getComments();
    })();

    handleCancel();
  };

  return (
    <>
      <div className="comment">
        <div className="comment_input">
          <div className="username">{`${comment.user}`}</div>

          {edit ? (
            <textarea
              value={newCommentContent}
              onChange={event => setNewCommentContent(event.target.value)}
            />
          ) : (
            <p>{content}</p>
          )}

          {edit ? (
            <div className="comment_actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div className="comment_actions">
              <button onClick={handleEdit}>Edit</button>
              <button
                onClick={() => {
                  handleDelete(comment._id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
