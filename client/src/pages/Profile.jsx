import { useState } from "react";
import Header from "../components/Header";

function Profile() {
  const [activeTab, setActiveTab] = useState("posts");
  const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    username: "@johndoe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "New York, USA",
    joined: "January 2020",
    followers: 1234,
    following: 567,
    posts: 89,
  });

  const [editForm, setEditForm] = useState(profileData);

  const handleOpenEditProfile = () => {
    setEditForm(profileData);
    setIsOpenEditProfile(true);
  };

  const handleEditProfile = (event) => {
    event.preventDefault();
    setProfileData(editForm);
    setIsOpenEditProfile(false);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  const postExamples = [
    { id: 1, content: "This is my first post!" },
    { id: 2, content: "Here's another post." },
    { id: 3, content: "Loving this platform!" },
    { id: 4, content: "Check out my latest update." },
    { id: 5, content: "Sharing some thoughts." },
    { id: 6, content: "Excited to be here!" },
  ];

  const mediaExamples = [
    { id: 1, content: "Media 1: Image or video content." },
    { id: 2, content: "Media 2: Another media content." },
  ];

  const likesExamples = [
    { id: 1, content: "Liked Post 1: Lorem ipsum dolor sit amet." },
    { id: 2, content: "Liked Post 2: Consectetur adipiscing elit." },
  ];

  return (
    <div className="container sideLineProfile">
      <Header />
      <div className="profilePageGrid">
        <aside className="leftSidebarProfile">
          <ul>
            <li>
              <img
                src="/icons/home.png"
                alt="home icon"
                width="24"
                height="24"
              />

              <p>Home</p>
            </li>
            <li>
              <img
                src="/icons/search.png"
                alt="explore icon"
                width="24"
                height="24"
              />
              <p>Explore</p>
            </li>
            <li>
              <img
                src="/icons/messenger.png"
                alt="messages icon"
                width="24"
                height="24"
              />
              <p>Messages</p>
            </li>
            <li>
              <img
                src="/icons/user.png"
                alt="profile icon"
                width="24"
                height="24"
              />
              <p>Profile</p>
            </li>
            <li>
              <img
                src="/icons/settings.png"
                alt="settings icon"
                width="24"
                height="24"
              />
              <p>Settings</p>
            </li>
          </ul>
        </aside>
        <main className="mainContentProfile">
          <div className="profileContent">
            <div className="profileBanner"></div>
            <div className="profileHeader">
              <div className="profileHeaderOne">
                <img src="/images/user.png" alt="User Profile" />
                <div className="profileInfo">
                  <h2>{profileData.name}</h2>
                  <p>{profileData.username}</p>
                  <p>Bio: {profileData.bio}</p>
                  <p>Location: {profileData.location}</p>
                  <p>Joined: {profileData.joined}</p>
                </div>
              </div>
              <div className="profileHeaderTwo">
                <div className="profileStats">
                  <p>Follower: {profileData.followers.toLocaleString()}</p>
                  <p>Following: {profileData.following.toLocaleString()}</p>
                  <p>Posts: {profileData.posts.toLocaleString()}</p>
                  <button
                    className="editProfileButton"
                    onClick={handleOpenEditProfile}
                  >
                    Edit Profile
                  </button>
                </div>

                {isOpenEditProfile && (
                  <div className="editProfileModal">
                    <div className="editProfileContent">
                      <h2>Edit Profile</h2>
                      <button onClick={() => setIsOpenEditProfile(false)}>
                        Cancel
                      </button>
                      <form onSubmit={handleEditProfile}>
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={editForm.name}
                          onChange={handleEditChange}
                        />
                        <label htmlFor="username">Username:</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          value={editForm.username}
                          onChange={handleEditChange}
                        />
                        <label htmlFor="bio">Bio:</label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={editForm.bio}
                          onChange={handleEditChange}
                        ></textarea>
                        <button type="submit">Save Changes</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="profilePosts">
              <div className="postSelection">
                <button
                  className={
                    activeTab === "posts" ? "postButton active" : "postButton"
                  }
                  onClick={() => setActiveTab("posts")}
                >
                  Posts
                </button>
                <button
                  className={
                    activeTab === "media" ? "mediaButton active" : "mediaButton"
                  }
                  onClick={() => setActiveTab("media")}
                >
                  Media
                </button>
                <button
                  className={
                    activeTab === "likes" ? "likesButton active" : "likesButton"
                  }
                  onClick={() => setActiveTab("likes")}
                >
                  Likes
                </button>
              </div>
              <div className="postsContainer">
                {activeTab === "posts" && (
                  <div className="posts">
                    {postExamples.map((post) => (
                      <p key={post.id}>
                        Post {post.id}: {post.content}
                      </p>
                    ))}
                  </div>
                )}
                {activeTab === "media" && (
                  <div className="medias">
                    {mediaExamples.map((media) => (
                      <p key={media.id}>
                        Media {media.id}: {media.content}
                      </p>
                    ))}
                  </div>
                )}
                {activeTab === "likes" && (
                  <div className="likes">
                    {likesExamples.map((like) => (
                      <p key={like.id}>{like.content}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <aside className="rightSidebarProfile">
          <div className="suggestions">
            <h3>Suggestions</h3>
            <ul>
              <li>
                <img src="/images/user.png" alt="User 1" />
                <p>User 1</p>
              </li>
              <li>
                <img src="/images/user.png" alt="User 2" />
                <p>User 2</p>
              </li>
              <li>
                <img src="/images/user.png" alt="User 3" />
                <p>User 3</p>
              </li>
            </ul>
          </div>
          <div className="AINetmate">
            <h3>AI Netmate</h3>
            <p>Get personalized recommendations and insights.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Profile;
