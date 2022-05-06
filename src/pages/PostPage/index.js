import { client } from "client";
import { AddComment, ListOfComments } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PostPage({ setComments, getComments }) {
  const [individualPost, setIndividualPost] = useState();
  const { id } = useParams();
  const fetchPost = async () => {
    const response = await client.get(`/post/${id}`);
    setIndividualPost(response.data);
  };
  const updateComment = (userName, comment) => {
    let updatedPost = JSON.parse(JSON.stringify(individualPost));
    let newComment = {
      commentContent: comment,
      user: userName,
    };
    updatedPost.comments.push(newComment);
    setIndividualPost(updatedPost);
  };
  const deleteComment = id => {
    let updatedPost = JSON.parse(JSON.stringify(individualPost));
    let filteredComments = updatedPost.comments.filter(individualComment => {
      return individualComment._id !== id;
    });
    updatedPost.comments = filteredComments;
    setIndividualPost(updatedPost);
  };
  useEffect(() => {
    id && fetchPost();
  }, [id]);
  return (
    <div className="p-20">
      {individualPost && (
        <div className="bg-white p-10 rounded-xl flex flex-col gap-10">
        <div className="">
        <div className="">
        <p className="text-emerald-800 mb-20">{`${individualPost.user.userName}`}</p>
        <p>{individualPost.createdAt.split("T")[0]}</p>
          <p>{individualPost.category}</p>
          <h3 className="font-bold mb-4">{individualPost.title}</h3>
          <p style={{"white-space": "pre-line"}}>{individualPost.content}</p>
        </div>
  
          </div>
          <div>
          <div className="p-10 rounded-xl flex flex-col border-2 border-dashed bg-gray-100">
          <AddComment 
            id={id}
            individualPost={individualPost}
            setIndividualPost={setIndividualPost}
            getComments={getComments}
            setComments={setComments}
            updateComment={updateComment}
            />
          </div>
          </div>
          <div className="">
          <ListOfComments
            comments={individualPost.comments}
            setComments={setComments}
            fetchPost={fetchPost}
            deleteComment={deleteComment}
          />
          </div>
        </div>
      )}
    </div>
  );
}
