import React from "react";
import { Navbar, Container } from "react-bootstrap";

import LogoImg from "../images/logoWhite.png";
function Header() {
  return (
    <Navbar className="bg-navy">
      <Container>
        <Navbar.Brand
          href="/patient-list"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            alt="로고이미지"
            src={LogoImg}
            // width="30"
            height="40"
            className="d-inline-block align-top"
          />
          <span style={{ color: "white", paddingLeft: "20px" }}>
            의사 병동 회진 시스템
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
