import { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Payments from "./Pages/payment/Payments";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Protected routes */}
          <Route element={<Layout />} path="/">
            <Route element={<Payments />} path="payments/" />
          </Route>

          {/* Login route */}
          <Route element={<Auth />} path="/auth" />
        </Routes>
      </Router>
    </div>
  );
}
import Auth from "./Pages/Auth";

export default App;
