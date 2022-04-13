import { Post } from "../Post";

export function ListOfPosts({ posts, setPosts }) {
  return (
    <div>
      {posts.map((post) => {
        // pass the id, the content and the setPosts function
        return (
          <Post
            key={post._id}
            id={post.id}
            title={post.title}
            content={post.content}
            setPosts={setPosts}
            post={post}
          />
        );
      })}
    </div>
  );
}
