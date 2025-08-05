import { data, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      try {
        const response = await fetch(
          "http://localhost:5000/api/login/getLogin",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          toast.success("Success! Welcome To NetMate", {
            position: "top-right",
          });
          setTimeout(() => navigate("/home"), 2000);
        } else {
          console.log("burada");
          toast.error(data.message, { position: "top-right" });
        }
      } catch (err) {
        toast.error(err, {
          position: "top-right",
        });
      }
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
