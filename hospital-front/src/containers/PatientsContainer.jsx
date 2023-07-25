import React, { useState, useEffect } from "react";

import UserBox from "../components/UserBox";
import InfoBox from "../components/InfoBox";
import SearchBox from "../components/SearchBox";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

function PatientsContainer() {
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const doctorName = useSelector((state) => state.auth.username);

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

  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        style={{
          justifyContent: "space-between",
          alignItems: "stretch",
          // flexWrap: "wrap-reverse",
          padding: "25px 0",
        }}
      >
        <SearchBox />
        {isSmallScreen ? "" : <UserBox doctor={doctorName} department="IM" />}
      </Stack>

      {Array.from({ length: 12 }).map((_, index) => (
        <InfoBox
          key={index}
          ward="31"
          room={"31" + index}
          pName="김윤임"
          age="75"
          gender="F"
          date="2023.07.11"
          pNum="08033373"
          department="IM"
          doctor={doctorName}
          insurance="건보"
          diagnostic="부위가 명시되지 않은 요로감염"
          onSelect={(e) => {
            navigate("/patient/" + index);
          }}
        />
      ))}
    </>
  );
}

export default PatientsContainer;
