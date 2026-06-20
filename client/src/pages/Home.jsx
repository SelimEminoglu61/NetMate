import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";

function Home() {
  return (
    <div className="container">
      <div className="headerHome">
        <div className="headerHomeLeft">
          <button className="hamburgerButton">
            <img src="/icons/hamburger.png" alt="Hamburger Menu" width={30} />
          </button>
        </div>
        <img src="/images/logo.png" alt="Logo" width={150} />
        <div className="headerHomeRight">
          <button
            className="profileButton"
            onClick={() => (window.location.href = "/profile")}
          >
            <img src="/images/user.png" alt="Profile" width={50} />
          </button>
        </div>
      </div>
      <div className="mainHome">
        <div className="sidebarHome">
          <Suggestions />
        </div>
        <Feed />
        <div className="rightbarHome">
          <p>AI Chat Bot</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
