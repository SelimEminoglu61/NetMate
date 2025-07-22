import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "../src/assets/scss/style.scss";
function App() {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
