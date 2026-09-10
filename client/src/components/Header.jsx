function Header() {
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
          onClick={() => (window.location.href = "/profile")}
        >
          <img src="/images/user.png" alt="Profile" width={50} />
        </button>
      </div>
    </div>
  );
}

export default Header;
