import Feed from "../components/Feed";

function Home() {
  return (
    <div className="container">
      <div className="headerHome">
        <p>Netmate</p>
      </div>
      <div className="mainHome">
        <div className="sidebarHome">
          <p>Suggestions Users</p>
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
