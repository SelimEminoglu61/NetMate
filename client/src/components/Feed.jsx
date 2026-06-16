import PostCreate from "./PostCreate";
import Posts from "./Posts";
import { useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "This is a sample post.",
      img: "avatar.png",
    },
    {
      id: 2,
      user: "Haren Doke",
      content: "This is a sample post.",
      img: "avatar.png",
    },
    {
      id: 3,
      user: "Jane Smith",
      content: "This is another sample post.",
      img: "avatar.png",
    },
    {
      id: 4,
      user: "Johan Kepos",
      content: "This is a sample post.",
      img: "avatar.png",
    },
    {
      id: 5,
      user: "Daizy Frank",
      content: "This is a sample post.",
      img: "avatar.png",
    },
  ]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="feedHome">
      <PostCreate addPost={addPost} />
      <Posts posts={posts} />
    </div>
  );
}

export default Feed;
