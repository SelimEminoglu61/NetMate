function Posts({ posts, setPosts }) {
  const handleLikeClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const isLiked = post.liked;

          return {
            ...post,
            liked: !isLiked,
            likeNumber: isLiked ? post.likeNumber - 1 : post.likeNumber + 1,
          };
        }
        return post;
      }),
    );
  };

  const handleCommentClick = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            showComments: !post.showComments,
          };
        }
        return post;
      }),
    );
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div className="postCard" key={index}>
          <div className="postCardHeader">
            <div className="postCardUser">{post.user}</div>
            <div className="postCardDate">2 hours ago</div>
          </div>
          <div className="postCardContent">{post.content}</div>
          <div className="postCardActions">
            <button
              className="likeButton"
              onClick={() => handleLikeClick(post.id)}
            >
              <img
                src={post.liked ? "/icons/heartClick.png" : "/icons/heart.png"}
                alt="Like"
                width={25}
              />
              {post.likeNumber}
            </button>
            <button
              className="commentButton"
              onClick={() => handleCommentClick(post.id)}
            >
              <p>Leave a comment</p>
            </button>
          </div>
          {post.showComments && (
            <div className="postCardComments">
              <input type="text" placeholder="Write a comment..." />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Posts;
