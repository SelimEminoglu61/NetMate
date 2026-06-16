import RegisterForm from "../container/RegisterForm";

function Register() {
  return (
    <div className="container">
      <div className="heightDiv">
        <div className="registerDiv">
          <div className="logoTopContent">
            <div className="logoWrapper">
              <img
                src="./images/logo.png"
                className="logo animateStart"
                alt="NetMate Logo"
              />
            </div>
            <p className="logoTitle">Sign Up</p>
          </div>
          <RegisterForm />
          <div className="toRegister">
            <p>Do you register now?</p>
            <button>
              <a href="/login">Log In</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
