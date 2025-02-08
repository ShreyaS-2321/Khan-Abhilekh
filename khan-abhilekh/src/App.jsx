// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShiftLogForm from "./components/shiftform";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import ShiftLogTable from "./components/shiftdata";
import Landing from "./components/Landing";
import Home from "./components/homepage";
import Graphs from "./components/graphs";
import Alertpage from "./components/alert";
import AlertLogs from "./components/alertlogs";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Login and Signup */}
        <Route path="/shiftform" element={<ShiftLogForm/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/table" element={<ShiftLogTable/>}/>
        <Route path="/graph" element={<Graphs/>}/>
        <Route path="/alert" element={<Alertpage/>}/>
        <Route path="/alertlogs" element={<AlertLogs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
