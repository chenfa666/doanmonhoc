import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DoorControl from "./pages/DoorControl";
import Home from "./pages/Home";
import LightingSystem from "./pages/LightingSystem";
import Camera from "./pages/Camera";
import Camera1 from "./pages/Camera1";
import LogInDoor from "./pages/LogInDoor";
import Television from "./pages/Television";
import SignIn from "./pages/SignIn";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/lighting-system":
        title = "";
        metaDescription = "";
        break;
      case "/camera1":
        title = "";
        metaDescription = "";
        break;
      case "/camera":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-door":
        title = "";
        metaDescription = "";
        break;
      case "/television":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DoorControl />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lighting-system" element={<LightingSystem />} />
      <Route path="/camera1" element={<Camera />} />
      <Route path="/camera" element={<Camera1 />} />
      <Route path="/log-in-door" element={<LogInDoor />} />
      <Route path="/television" element={<Television />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}
export default App;
