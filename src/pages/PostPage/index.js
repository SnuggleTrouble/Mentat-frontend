import { client } from "client";
import { AddComment, ListOfComments } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PostPage({ setComments, getComments }) {
  const [individualPost, setIndividualPost] = useState();
  const { id } = useParams();
  console.log(id);
  const fetchPost = async () => {
    const response = await client.get(`/post/${id}`);
    setIndividualPost(response.data);
  };
  const updateComments = (userName, comment) => {
    let updatedPost = JSON.parse(JSON.stringify(individualPost));
    let newComment = {
      content: comment,
      user: userName,
    };
    updatedPost.comments.push(newComment);
    setIndividualPost(updatedPost);
  };
  const deleteComment = id => {
    let updatedPost = JSON.parse(JSON.stringify(individualPost));
    console.log(id, updatedPost, "This is a string we need to find")
    let filteredComments = updatedPost.comments.filter(individualComment => {
      return individualComment._id !== id;
    });
    updatedPost.comments = filteredComments
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
            updateComments={updateComments}
          />
          <ListOfComments
            comments={individualPost.comments}
            setComments={setComments}
            getComments={getComments}
            deleteComment={deleteComment}
          />
        </div>
      )}
    </div>
  );
}
