import RegisterForm from "../container/RegisterForm";

function Register() {
  return (
    <div className="container">
      <div className="heightDiv">
        <div className="registerDiv">
          <h1>NetMate</h1>
          <p>Sign Up</p>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
