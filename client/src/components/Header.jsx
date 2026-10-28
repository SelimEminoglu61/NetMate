import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="/images/user.png" alt="Profile" width={50} />
        </button>
        {isMenuOpen && (
          <div className="profileMenu">
            <ul>
              <li onClick={() => navigate("/profile")}>Profile</li>
              <li onClick={() => navigate("/settings")}>Settings</li>
              <li
                onClick={() => {
                  sessionStorage.removeItem("token");
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
