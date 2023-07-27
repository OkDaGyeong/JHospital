import React, { useState, useEffect } from "react";

import UserBox from "../components/UserBox";
import InfoBox from "../components/InfoBox";
import SearchBox from "../components/SearchBox";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import axios from "axios";
function PatientsContainer() {
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [patients, setPatients] = useState([]);

  const doctorName = useSelector((state) => state.auth.username);
  const username = useSelector((state) => state.auth.employeeno);

  const pList = useSelector((state) => state.patients.patientList);
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

  const { employeeno, patient, ward } = useSelector((state) => state.search);
  const handleSearch = () => {
    axios
      .get("/patient/list", {
        params: {
          employeeNo: employeeno,
          patientName: patient,
          ward: ward,
        },
      })
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("환자목록 오류", error);
      });
    console.log("employeeNo:", employeeno);
    console.log("patientName:", patient);
    console.log("ward:", ward);
  };

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
        <SearchBox handleSearch={handleSearch} />
        {isSmallScreen ? (
          ""
        ) : (
          <UserBox doctor={doctorName} employeeno={username} />
        )}
      </Stack>

      {pList.map((patient, index) => (
        <InfoBox
          key={index}
          ward={patient.ward}
          room={patient.room}
          pName={patient.patientName}
          age={patient.age}
          gender={patient.sex}
          date={patient.date}
          pNum={patient.patientNo}
          department={patient.department}
          doctor={patient.doctorName}
          insurance={patient.insurance}
          diagnostic={patient.diagnosis}
          onSelect={(e) => {
            navigate("/patient/" + index);
          }}
        />
      ))}
    </>
  );
}

export default PatientsContainer;
