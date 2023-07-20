import React from "react";
import LoginContainer from "../containers/LoginContainer";

import "../styles/loginPage.scss";
function LoginPage() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <LoginContainer />
    </div>
  );
}

export default LoginPage;
