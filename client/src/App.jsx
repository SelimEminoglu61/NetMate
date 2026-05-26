import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "../src/assets/scss/style.scss";
import LogoIntro from "./container/Logoİntro";
import { useState } from "react";

function App() {
  const [showLogoIntro, setShowLogoIntro] = useState(true);

  return (
    <>
      {showLogoIntro && <LogoIntro onFinish={() => setShowLogoIntro(false)} />}

      {!showLogoIntro && (
        <div>
          <ToastContainer />
          <Router />
        </div>
      )}
    </>
  );
}

export default App;
