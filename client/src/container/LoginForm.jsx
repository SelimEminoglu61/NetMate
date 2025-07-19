import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .password("Invalid password")
    .required("Required")
    .min(6, "Must be at least six character")
    .max(20, "Must be at most twenty character")
    .minLowercase(1, "At least one lowercase letter")
    .minUppercase(1, "At least one uppercase letter")
    .minSymbols(1, "At least one special character"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log("giriş başarılı", values);
      navigate("/Home");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="on"
        placeholder="exp@gmail.com"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="formError">{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        autoComplete="current-password"
        placeholder="*********"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="formError">{formik.errors.password}</div>
      ) : null}
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
