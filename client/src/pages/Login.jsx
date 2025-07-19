import LoginForm from "../container/LoginForm.jsx";

function Login() {
  return (
    <div className="container">
      <div className="heightDiv">
        <div className="loginDiv">
          <h1>NetMate</h1>
          <p>Log In</p>
          <LoginForm />
          <h4 className="toRegister">
            Have not you your account?<a href="/register">Sign Up</a>now
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
