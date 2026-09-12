import { useState } from "react";
import Header from "../components/Header";

function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

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
                  <h2>John Doe</h2>
                  <p>@johndoe</p>
                  <p>
                    Bio: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                  <p>Location: New York, USA</p>
                  <p>Joined: January 2020</p>
                </div>
              </div>
              <div className="profileHeaderTwo">
                <p>Follower: 1,234</p>
                <p>Following: 567</p>
                <p>Posts: 89</p>
                <button className="editProfileButton">Edit Profile</button>
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
                  <div className="post">
                    <p>Post 1: Lorem ipsum dolor sit amet.</p>
                  </div>
                )}
                {activeTab === "media" && (
                  <div className="media">
                    <p>Media 1: Image or video content.</p>
                  </div>
                )}
                {activeTab === "likes" && (
                  <div className="likes">
                    <p>Liked Post 1: Lorem ipsum dolor sit amet.</p>
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
