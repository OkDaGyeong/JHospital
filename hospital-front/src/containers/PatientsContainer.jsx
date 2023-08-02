import React, { useState, useEffect } from "react";

import UserBox from "../components/UserBox";
import InfoBox from "../components/InfoBox";
import SearchBox from "../components/SearchBox";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  setOrderDateList,
  setSelectDate,
  setInternalMedList,
  setExternalMedList,
  setInjectionList,
} from "../modules/order";

import axios from "axios";
function PatientsContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [patients, setPatients] = useState([]);

  const doctorName = useSelector((state) => state.auth.username);
  const username = useSelector((state) => state.auth.employeeno);

  let pList = useSelector((state) => state.patients.patientList) || [];
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

  const viewPatient = (patientNo, date, department, code, subCode) => {
    //환자 상세페이지로 이동할 api작성하면 될듯
    axios
      .get("/viewPatient/detail-date", {
        params: {
          patientNo: patientNo,
          date: date,
          department: department,
          code: code,
          subCode: subCode,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(setOrderDateList(response.data));
        dispatch(setSelectDate(response.data[0]));
        const sdate = response.data[0];
        axios
          .get("/viewPatient/detail-order", {
            params: {
              patientNo: patientNo,
              date: date,
              department: department,
              code: code,
              subCode: subCode,
              orderDate: sdate,
            },
          })
          .then((response) => {
            console.log(response.data);
            const internalData = response.data.filter(
              (item) => item.division === "내복"
            );
            const externalData = response.data.filter(
              (item) => item.division === "외용"
            );
            const injectionData = response.data.filter(
              (item) => item.division === "주사"
            );

            dispatch(setInternalMedList(internalData));
            dispatch(setExternalMedList(externalData));
            dispatch(setInjectionList(injectionData));
          })
          .catch((error) => {
            console.error("실패", error);
          });
      })
      .catch((error) => {
        console.error("오더일자 불러오기 실패", error);
      });
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
        <SearchBox />
        {/* <SearchBox handleSearch={handleSearch} /> */}

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
            viewPatient(
              patient.patientNo,
              patient.date,
              patient.department,
              patient.code,
              patient.subCode
            );
          }}
        />
      ))}
    </>
  );
}

export default PatientsContainer;
