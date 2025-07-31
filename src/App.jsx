import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";

function App() {
  return (
    <>
      <Router>
        <div
          id="fixed-background"
          className="fixed top-0 left-0 w-full h-screen bg-background -z-10"
        ></div>

        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/albums" element={<ExplorePage />} />
          {/* If no other routes match, show the error page */}
          <Route path="/*" element={<ErrorPage errorCode={404} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
