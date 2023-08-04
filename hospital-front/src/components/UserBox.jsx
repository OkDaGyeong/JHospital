import React, { useState, useEffect } from "react";
import { Button, Image, Stack, Card } from "react-bootstrap";
import "../styles/patientListPage.scss";
import profileImg from "../images/doctor.png";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../modules/auth";
import { useDispatch } from "react-redux";

import LogoutConfirmationModal from "./LogoutConfirmationModal";
function UserBox({ doctor, employeeno }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };

  const [showModal, setShowModal] = useState(false); // 모달의 표시 여부를 관리합니다.

  // 로그아웃 버튼을 누를 때 모달을 표시하는 함수
  const handleLogoutClick = (event) => {
    setShowModal(true);
  };

  // 모달에서 취소 또는 로그아웃 버튼을 누를 때 모달을 닫는 함수
  const handleCloseModal = () => {
    setShowModal(false);
    const logoutButton = document.getElementById("logout-button");
    logoutButton.blur();
  };

  return (
    <>
      <Card id="user-box">
        <Stack direction="horizontal" gap={3}>
          <Image
            src={profileImg}
            roundedCircle
            style={{ width: "40px", height: "40px" }}
          />
          <Stack gap={2}>
            <h5 style={{ margin: 0 }}>
              {doctor} ({employeeno}){/* {department}　{doctor} */}
            </h5>

            <Button
              id="logout-button" // id 추가
              variant="outline-primary"
              className="fullWidth btn-logout"
              onClick={handleLogoutClick}
            >
              로그아웃
            </Button>
            {/* 모달 컴포넌트를 사용하여 모달을 표시 */}
            <LogoutConfirmationModal
              show={showModal}
              onClose={handleCloseModal}
              onLogout={handleLogout}
            />
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default UserBox;
