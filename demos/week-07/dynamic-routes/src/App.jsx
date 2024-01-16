import About from "./pages/About";
import Animals from "./pages/Animals";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Dynamic Routing</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:username" element={<UserPage />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="*" element={<h2>404 page not found</h2>} />
      </Routes>
    </div>
  );
}
