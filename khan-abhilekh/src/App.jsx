// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShiftLogForm from "./components/shiftform";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import ShiftLogTable from "./components/shiftdata";
import Landing from "./components/Landing";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Login and Signup */}
        <Route path="/shiftform" element={<ShiftLogForm/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/table" element={<ShiftLogTable/>}/>
      </Routes>
    </Router>
  );
};

export default App;
