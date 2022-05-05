import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Support } from "components/Support/Support";
import comment from "..//..///images/comment.png";
import editing from "..//..//images/editing.png";
import garbage from "..//..//images//garbage.png";
import { AuthContext } from "context";

// Receive the id, the content and the setPost function.
export function Post({
  id,
  title,
  content,
  category,
  support,
  getComments,
  setPosts,
  post,
  getPosts,
  createdAt,
}) {
  const [showAll, setShowAll] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState(title);
  const [newPostCategory, setNewPostCategory] = useState(category);
  const [newPostContent, setNewPostContent] = useState(content);
  const { user } = useContext(AuthContext);
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
      <div className=" rounded-2xl border-2">
        <div className="p-10 bg-white rounded-2xl ">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="my-2 text-emerald-800">{`${post.user.userName}`}</div>
              <p>{createdAt.split("T")[0]}</p>
              <p className="p-2 w-40 flex justify-center rounded-xl bg-emerald-400 mb-10 text-emerald-900">
                {category}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {edit ? (
              <select
                className=" p-2 border-2 rounded-lg "
                value={newPostCategory}
                onChange={event => setNewPostCategory(event.target.value)}
              >
                <option value="" selected disabled hidden>
                  Select Category
                </option>
                <option value="Addiction">Addiction & Substance Abuse</option>
                <option value="ADHD">ADHD</option>
                <option value="Anger">Anger</option>
                <option value="Anxiety Disorders">
                  Anxiety & Panic Attacks
                </option>
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
              <p></p>
            )}

            {edit ? (
              <input
                className=" p-2 border-2 rounded-lg "
                value={newPostTitle}
                onChange={event => setNewPostTitle(event.target.value)}
              />
            ) : (
              <p className="font-bold ">{title}</p>
            )}

            {edit ? (
              <textarea
                className="p-2 border-2 rounded-lg"
                value={newPostContent}
                onChange={event => setNewPostContent(event.target.value)}
              />
            ) : showAll ? (
              <p style={{"white-space": "pre-line"}} className="">{content}</p>
            ) : (
              <p style={{"white-space": "pre-line"}} className="my-2">
                {content.length > 500
                  ? `${content.substring(0, 500)}...`
                  : content}
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
                {content.length > 500 && (
                  <button
                    className="text-stone-600 font-semibold pt-5 underline underline-offset-1"
                    onClick={handleShowAll}
                  >
                    {showAll ? "Read less" : "Read more"}
                  </button>
                )}
                <Support support={support} id={id} />
                <button
                  className=" bg-gray-100 rounded-lg  text-stone-700 text-2xl px-5"
                  onClick={handleShowComment}
                >
                  {" "}
                  <img src={comment} width="25px" alt=""></img>
                </button>
                {user._id === post.user._id && (
                  <div className=" flex flex-wrap justify-items-start gap-10">
                    <button
                      className=" bg-gray-100 rounded-lg  px-5 min-w-fit "
                      onClick={handleEdit}
                    >
                      <img src={editing} width="22px" alt=""></img>
                    </button>
                    <button
                      className=" bg-gray-100 rounded-lg px-5"
                      onClick={handleDelete}
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
