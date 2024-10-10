import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
        <footer>
          <p>© 2024 MyApp. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
