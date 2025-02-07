// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShiftLogForm from "./components/shiftform";
import Login from "./components/login";
import Signup from "./components/signup";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Login and Signup */}
        <Route path="/" element={<ShiftLogForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
};

export default App;
