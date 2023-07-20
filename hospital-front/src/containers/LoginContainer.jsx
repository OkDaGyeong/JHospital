import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

import "../styles/loginPage.scss";
import LogoImg from "../images/logoBlack.png";

import { useDispatch, useSelector } from "react-redux";
// import { login } from "../modules/auth";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function LoginContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); //v6부터 useHistory가 아닌 navigate를 사용해야함

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false); // 로그인 에러 상태 추가
  // const loginError = useSelector((state) => state.auth.error);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();

    handleLogin();
  };

  const handleLogin = () => {
    // 로그인 요청을 서버에 보냅니다.
    axios
      .post("/viewUser/login", { id: id, password: password })
      .then((response) => {
        setLoginError(false);
        console.log(response);
        let obj = response.data;
        console.log(obj.id);
        console.log(obj.password);
        if (response.data !== "error") {
          navigate("/patient-list");
        } else {
          setLoginError(true);
        }
      })
      .catch((error) => {
        setLoginError(true);
        console.error("Error logging in:", error);
      });
  };

  return (
    <Container
      className="login-box"
      style={{ maxWidth: "450px", padding: "50px" }}
    >
      <div className="text-center">
        <img src={LogoImg} alt="로고" style={{ marginBottom: "10px" }} />
      </div>
      <LoginForm
        id={id}
        password={password}
        onIdChange={handleIdChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={onLogin}
      />
      {loginError && (
        <p className="warning-ment">아이디와 비밀번호를 다시 확인하십시오</p>
      )}
    </Container>
  );
}

export default LoginContainer;
