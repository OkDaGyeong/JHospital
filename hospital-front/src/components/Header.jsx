import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";

import LogoImg from "../images/logoWhite.png";
import LogoIcon from "../images/logoIcon.png";

import { useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { logoutSuccess } from "../modules/auth";
import { setOrderNull } from "../modules/order";

import LogoutConfirmationModal from "./LogoutConfirmationModal";
function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 560);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false); // 모달의 표시 여부

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };
  // 로그아웃 버튼을 누를 때 모달 표시
  const handleLogoutClick = (event) => {
    setShowModal(true);
  };

  // 모달에서 취소 또는 로그아웃 버튼을 누를 때 모달 닫음
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Navbar className="bg-navy">
      <Container className="bg-navy">
        <Navbar.Brand
          href="/"
          style={{ display: "flex", alignItems: "center" }}
          onClick={(e) => {
            dispatch(setOrderNull());
          }}
        >
          <img
            alt="로고이미지"
            src={isSmallScreen ? LogoIcon : LogoImg}
            // width="30"
            height="40"
            className="d-inline-block align-top"
          />
          <span style={{ color: "white", paddingLeft: "20px" }}>
            의사 병동 회진 시스템
          </span>
        </Navbar.Brand>

        {isSmallScreen ? (
          <>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              className="text-white"
              onClick={handleLogoutClick}
            >
              <FiLogOut />
            </Button>
            <LogoutConfirmationModal
              show={showModal}
              onClose={handleCloseModal}
              onLogout={handleLogout}
            />
          </>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
