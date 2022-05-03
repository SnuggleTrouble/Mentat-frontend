import { Post } from "components/Post";

export function ListOfPosts({ posts, setPosts, getPosts }) {
  return (
    <div className="p-20 flex flex-col gap-10">
      {posts
        .slice(0)
        .reverse()
        .map(post => {
          // Pass the id, the content and the setPosts function
          return (
            <Post
              key={post._id}
              id={post._id}
              title={post.title}
              content={post.content}
              support={post.support}
              comments={post.comments}
              category={post.category}
              setPosts={setPosts}
              post={post}
              getPosts={getPosts}
            />
          );
        })}
    </div>
  );
}
