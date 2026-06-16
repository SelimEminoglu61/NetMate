import LoginForm from "../container/LoginForm.jsx";

function Login() {
  return (
    <div className="container">
      <div className="heightDiv">
        <div className="loginDiv">
          <div className="logoTopContent">
            <div className="logoWrapper">
              <img
                src="./images/logo.png"
                className="logo animateStart"
                alt="NetMate Logo"
              />
            </div>
            <p className="logoTitle">Log In</p>
          </div>

          <LoginForm />
          <div className="toRegister">
            <p>Have not you your account?</p>
            <button>
              <a href="/register">Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
