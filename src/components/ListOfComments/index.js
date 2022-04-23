import { Comment } from "components/Comment";

export function ListOfComments({
  comments,
  setComments,
  getComments,
  deleteComment,
}) {
  return (
    <div>
      {comments &&
        comments.map(comment => {
          // Pass the id, the content and the setComments function
          return (
            <Comment
              key={comment._id}
              id={comment._id}
              content={comment.content}
              setComments={setComments}
              comment={comment}
              getComments={getComments}
              deleteComment={deleteComment}
            />
          );
        })}
    </div>
  );
}
