import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPages";
import PatientList from "./pages/PatientList";
import Patient from "./pages/Patient";

import "./App.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/patient/:patientId" element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
