import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    LoginSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="exp@gmail.com"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="*********"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
