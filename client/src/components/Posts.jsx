import { useState } from "react";

function Posts({ posts, setPosts }) {
  const [commentsDrafts, setCommentsDrafts] = useState({});

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    const commentContent = commentsDrafts[postId]?.trim();

    if (!commentContent) {
      return;
    }

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId && commentContent) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: Date.now(),
                user: "Current User",
                content: commentContent,
              },
            ],
          };
        }
        return post;
      }),
    );

    setCommentsDrafts((prevDrafts) => ({
      ...prevDrafts,
      [postId]: "",
    }));
  };

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
      {posts.map((post) => (
        <div className="postCard" key={post.id}>
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
            <form
              onSubmit={(e) => handleCommentSubmit(e, post.id)}
              className="postCardComments"
            >
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentsDrafts[post.id] || ""}
                onChange={(e) =>
                  setCommentsDrafts({
                    ...commentsDrafts,
                    [post.id]: e.target.value,
                  })
                }
              />
              <button type="submit">Send Comment</button>
            </form>
          )}
          {post.showComments && (
            <div className="postCardCommentsList">
              {post.comments.map((comment) => (
                <div className="postCardComment" key={comment.id}>
                  <div className="postCardCommentUser">{comment.user}</div>
                  <div className="postCardCommentContent">
                    {comment.content}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Posts;
