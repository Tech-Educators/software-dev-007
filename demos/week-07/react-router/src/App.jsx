import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div>
      {/* This content will show on EVERY page */}
      <h1>React Router</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {/* Only one route will show at a time */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* This content will show on EVERY page */}
      <p>I am the footer</p>
    </div>
  );
}
