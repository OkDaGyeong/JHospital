import React from "react";
import { Button, Image, Stack, Card } from "react-bootstrap";
import "../styles/patientListPage.scss";
import profileImg from "../images/doctor.png";
import { useNavigate } from "react-router-dom";
function UserBox({ doctor, department }) {
  const navigate = useNavigate();
  return (
    <>
      <Card id="user-box" style={{ width: "250px" }}>
        <Stack direction="horizontal" gap={3} style={{ width: "200px" }}>
          <Image
            src={profileImg}
            roundedCircle
            style={{ width: "60px", height: "60px" }}
          />
          <Stack gap={2}>
            <h4 style={{ margin: 0 }}>
              {department}　{doctor}
            </h4>

            <Button
              variant="outline-primary"
              className="fullWidth"
              onClick={(e) => {
                navigate("/");
              }}
            >
              로그아웃
            </Button>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default UserBox;
