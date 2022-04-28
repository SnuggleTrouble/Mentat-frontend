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
    <div>
      {individualPost && (
        <div>
          <p>{individualPost.user.userName}</p>
          <h3>{individualPost.title}</h3>
          <p>{individualPost.content}</p>
          <AddComment
            id={id}
            individualPost={individualPost}
            setIndividualPost={setIndividualPost}
            getComments={getComments}
            setComments={setComments}
            updateComment={updateComment}
          />
          <ListOfComments
            comments={individualPost.comments}
            setComments={setComments}
            fetchPost={fetchPost}
            deleteComment={deleteComment}
          />
        </div>
      )}
    </div>
  );
}
