import { Post } from "../Post";


export function ListOfPosts({ posts, setPosts, getPosts }) {
  return (
    <div>
      {posts.map(post => {
        // pass the id, the content and the setPosts function
        return (
          <Post
            key={post._id}
            id={post._id}
            title={post.title}
            content={post.content}
            support={post.support}
            setPosts={setPosts}
            post={post}
            getPosts={getPosts}
          />
        );
      })}
    </div>
  );
}
