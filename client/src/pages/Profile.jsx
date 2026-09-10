import Header from "../components/Header";

function Profile() {
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
            <div className="profileBanner">
              <p className="banner">Profile Banner</p>
            </div>
            <div className="profileHeader">
              <img src="/images/user.png" alt="User Profile" />
              <div className="profileInfo">
                <h2>John Doe</h2>
                <p>@johndoe</p>
              </div>
            </div>
          </div>
        </main>
        <aside className="rightSidebarProfile">right menu</aside>
      </div>
    </div>
  );
}

export default Profile;
