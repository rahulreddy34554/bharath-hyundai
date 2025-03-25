import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ThankYouPage from "./ThankYouPage"; // Import ThankYouPage
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/thank-you" element={<ThankYouPage/>} />
      <Route path="/*" element={<App />} /> {/* Catch-all route for other pages */}
    </Routes>
  </Router>
);
