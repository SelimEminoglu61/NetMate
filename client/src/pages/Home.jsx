import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";
import Header from "../components/Header";

function Home() {
  return (
    <div className="container">
      <Header />
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
