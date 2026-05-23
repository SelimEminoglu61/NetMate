import LoginForm from "../container/LoginForm.jsx";

function Login() {
  return (
    <div className="container">
      <div className="heightDiv">
        <div className="loginDiv">
          <div>
            <img src="./images/logo.png" alt="NetMate Logo" width={150} />
            <p>Log In</p>
          </div>

          <LoginForm />
          <div className="toRegister">
            <p>Have not you your account?</p>

            <a href="/register">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
