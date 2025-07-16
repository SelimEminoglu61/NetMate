import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={Login} />
      <Route path="/register" element={Register} />
    </Routes>
  );
}

export default Router;
