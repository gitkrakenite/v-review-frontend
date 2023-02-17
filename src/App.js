import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./screens/splash/Splash";
import Landing from "./screens/landing/Landing";
import Auth from "./screens/auth/Auth";
import Profile from "./screens/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
