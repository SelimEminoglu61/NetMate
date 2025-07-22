import RegisterForm from "../container/RegisterForm";

function Register() {
  return (
    <div className="container">
      <div className="heightDiv">
        <div className="registerDiv">
          <h1>NetMate</h1>
          <p>Sign Up</p>
          <RegisterForm />
          <h4 className="toRegister">
            Have you your account?<a href="/login">Log In</a>now
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Register;
