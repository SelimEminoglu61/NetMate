import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registerSchema = Yup.object({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .password("Invalid password")
    .required("Required")
    .min(6, "Must be at least six character")
    .max(20, "Must be at most twenty character")
    .minLowercase(1, "At least one lowercase letter")
    .minUppercase(1, "At least one uppercase letter")
    .minSymbols(1, "At least one special character"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords is not match"),
});

function RegisterForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      console.log("submit oldu");
      try {
        const response = await fetch("http://localhost:5000/getRegister", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            surname: values.surname,
            email: values.email,
            password: values.password,
          }),
        });
        console.log("deneme");

        if (!response.ok) {
          throw new Error("Failed to response");
        }

        toast.success("Success! Navigating...", { position: "top-right" });
        setTimeout(() => navigate("/login"), 2000);
      } catch (err) {
        toast.error("Failed register: " + err, {
          position: "top-right",
        });
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="on"
        placeholder="your name"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="formError">{formik.errors.name}</div>
      ) : null}
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        id="surname"
        name="surname"
        autoComplete="on"
        placeholder="your surname"
        {...formik.getFieldProps("surname")}
      />
      {formik.touched.surname && formik.errors.surname ? (
        <div className="formError">{formik.errors.surname}</div>
      ) : null}
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
        autoComplete="on"
        placeholder="*********"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="formError">{formik.errors.password}</div>
      ) : null}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="*********"
        {...formik.getFieldProps("confirmPassword")}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="formError">{formik.errors.confirmPassword}</div>
      ) : null}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RegisterForm;
