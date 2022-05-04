import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "context";
import editing from "..//..//images/editing.png";
import garbage from "..//..//images//garbage.png";

// Receive the id, the content and the setComment function
export function Comment({
  fetchPost,
  id,
  commentContent,
  setComment,
  comment,
  deleteComment,
  updateComment,
  createdAt,
}) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newCommentContent, setNewCommentContent] = useState(commentContent);
  const { user } = useContext(AuthContext);

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
          commentContent: newCommentContent,
        },
        config
      );
      fetchPost();
    })();

    handleCancel();
  };

  return (
    <>
      <div className=" rounded-2xl border-2">
        <div className="p-10 bg-white rounded-2xl ">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="my-2 text-emerald-800">{`${comment.user}`}</div>
              <p>{createdAt.split("T")[0]}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {edit ? (
              <textarea
                className="p-2 border-2 rounded-lg"
                value={newCommentContent}
                onChange={event => setNewCommentContent(event.target.value)}
              />
            ) : showAll ? (
              <p className="">{commentContent}</p>
            ) : (
              <p className="my-2">
                {commentContent.length > 300
                  ? `${commentContent.substring(0, 300)}...`
                  : commentContent}
              </p>
            )}

            {edit ? (
              <div className="flex gap-5">
                <button
                  className=" bg-gray-100 rounded-lg py-2 px-5"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className=" bg-gray-100 rounded-lg py-2 px-5"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className=" flex flex-wrap justify-items-start gap-10">
                {commentContent.length > 300 && (
                  <button
                    className="text-stone-600 font-semibold pt-5 underline underline-offset-1"
                    onClick={handleShowAll}
                  >
                    {showAll ? "Read less" : "Read more"}
                  </button>
                )}

                {user.userName === comment.user && (
                  <div
                    id="line-preserver"
                    className=" flex flex-wrap justify-items-start gap-10"
                  >
                    <button
                      className=" bg-gray-100 rounded-lg  px-5 min-w-fit "
                      onClick={handleEdit}
                    >
                      <img src={editing} width="22px" alt=""></img>
                    </button>
                    <button
                      className=" bg-gray-100 rounded-lg px-5"
                      onClick={() => {
                        handleDelete(comment._id);
                      }}
                    >
                      <img src={garbage} width="22px" alt=""></img>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
