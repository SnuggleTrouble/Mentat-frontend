import { Comment } from "components/Comment";

export function ListOfComments({
  comments,
  setComments,
  fetchPost,
  deleteComment,
}) {
  return (
    <div className="flex flex-col gap-5">
      {comments &&
        comments
          .slice(0)
          .reverse()
          .map(comment => {
            // Pass the id, the content and the setComments function
            return (
              <Comment
                key={comment._id}
                fetchPost={fetchPost}
                id={comment._id}
                commentContent={comment.commentContent}
                setComments={setComments}
                comment={comment}
                deleteComment={deleteComment}
                createdAt={comment.createdAt}
              />
            );
          })}
    </div>
  );
}
