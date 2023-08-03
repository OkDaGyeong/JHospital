import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

import "../styles/loginPage.scss";
import LogoImg from "../images/logoBlack.png";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../modules/auth";
import { setPatientList } from "../modules/patients";
import { setSearchData } from "../modules/search";
import { setDoctorList } from "../modules/doctors";
// import { login } from "../modules/auth";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function LoginContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false); // 로그인 에러 상태 추가

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
      .post("/viewUser/login", {
        employeeNo: id,
        password: password,
      })
      .then((response) => {
        setLoginError(false);
        console.log(response);
        let obj = response.data;

        console.log(response.data);
        if (response.data !== "error") {
          const user = {
            username: response.data.viewUser.nameK,
            employeeno: response.data.viewUser.employeeNo,
          };
          dispatch(loginSuccess(user));
          const pList = response.data.patientList;
          dispatch(setPatientList(pList));
          dispatch(
            setSearchData({
              employeeno: user.employeeno,
              patient: "",
            })
          );
          navigate("/patient-list/" + response.data.employeeno);
          axios
            .post("/viewUser/search-dr")
            .then((response) => {
              dispatch(setDoctorList(response.data));
            })
            .catch((error) => {
              console.log("의사목록 에러");
            });
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
