import React, { useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";

import LogoImg from "../images/logoWhite.png";
import LogoIcon from "../images/logoIcon.png";

import { useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { logoutSuccess } from "../modules/auth";
function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 560);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 컴포넌트 마운트 시에도 한 번 실행하여 초기 값을 설정합니다.

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <Navbar className="bg-navy">
      <Container className="bg-navy">
        <Navbar.Brand
          href="/"
          style={{ display: "flex", alignItems: "center" }}
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
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
            className="text-white"
            onClick={(e) => {
              dispatch(logoutSuccess());
              navigate("/");
            }}
          >
            <FiLogOut />
          </Button>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
