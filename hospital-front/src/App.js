import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "./pages/LoginPages";
import PatientList from "./pages/PatientList";
import Patient from "./pages/Patient";
import NotFoundPage from "./pages/Error404";

import "./App.scss";

function App() {
  // useSelector를 이용하여 store의 isLoggedIn 상태를 가져옵니다.
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const employeeno = useSelector((state) => state.auth.employeeno);

  return (
    <div className="App">
      <Routes>
        {/* 로그인한 경우에만 접근 가능한 보호된 라우트 */}
        {isLoggedIn ? (
          <>
            <Route
              path="/"
              element={<Navigate to={"/patient-list/" + employeeno} replace />}
            />
            <Route path="/patient-list/:employeeno" element={<PatientList />} />
            <Route path="/patient/:patientId" element={<Patient />} />
          </>
        ) : (
          // 로그인하지 않은 경우 '/'로 리디렉션
          <>
            <Route
              path="/patient-list/:employeeno"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="/patient/:patientId"
              element={<Navigate to="/" replace />}
            />
            <Route path="/" element={<LoginPage />} />
          </>
        )}

        {/*정의하지 않은 주소는 404 에러페이지로 이동 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
