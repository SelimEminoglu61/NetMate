import { useState } from "react";

function PostCreate({ addPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost({
        id: Date.now(),
        user: "Current User",
        content: content,
        img: "avatar.png",
      });
      setContent("");
    }
    //backend'e gönderme işlemi burada yapılacak
  };

  return (
    <div className="postCreate">
      <div className="postCreateTop">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Ne düşünüyorsun?"
        />
      </div>

      <div className="postCreateBottom">
        <button onClick={handleSubmit}>Paylaş</button>
      </div>
    </div>
  );
}

export default PostCreate;
