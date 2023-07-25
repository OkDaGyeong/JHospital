import React from "react";
import { Button, Image, Stack, Card } from "react-bootstrap";
import "../styles/patientListPage.scss";
import profileImg from "../images/doctor.png";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../modules/auth";
import { useDispatch } from "react-redux";
function UserBox({ doctor, employeeno }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
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
              variant="outline-primary"
              className="fullWidth btn-logout"
              onClick={(e) => {
                handleLogout();
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
