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

function App() {
  return (
    <>
      <Router>
        <div
          id="fixed-background"
          className="fixed top-0 left-0 w-full h-screen bg-background -z-10"
        ></div>
        <div className="flex w-full h-full">
          <Navbar />
          <div id="main-content" className="flex w-full h-full flex-1 pt-16">
            <Routes>
              {/* Define your routes here */}
              <Route
                path="/"
                element={
                  <div className="flex flex-col items-center justify-center w-full h-screen text-text text-6xl">
                    <h1>Home Page (Placeholder)</h1>
                  </div>
                }
              />

              {/* If no other routes match, show the error page */}
              <Route path="/*" element={<ErrorPage errorCode={404} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
