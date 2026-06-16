function Posts({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div className="postCard">
          <div className="postCardHeader">
            <div className="postCardUser">{post.user}</div>
          </div>
          <div className="postCardContent">{post.content}</div>
          <div className="postCardActions"></div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
