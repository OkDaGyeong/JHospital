import React, { useState, useEffect } from "react";

import UserBox from "../components/UserBox";
import InfoBox from "../components/InfoBox";
import SearchBox from "../components/SearchBox";
import { Stack, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  setOrderDateList,
  setSelectDate,
  setInternalMedList,
  setExternalMedList,
  setInjectionList,
  setExaminationList,
  setPathologyList,
  setBloodTransList,
  setRadiationList,
  setUltrasoundList,
  setCTList,
  setMRList,
  setPhysicalList,
  setOthersList,
} from "../modules/order";

import axios from "axios";
function PatientsContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const doctorName = useSelector((state) => state.auth.username);
  const username = useSelector((state) => state.auth.employeeno);

  let pList = useSelector((state) => state.patients.patientList) || [];
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

  const viewPatient = (patientNo, date, department, code, subCode) => {
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
        // console.log(response.data);
        dispatch(setOrderDateList(response.data));
        dispatch(setSelectDate(response.data[0]));
        const sdate = response.data[0];

        const divisions = {
          내복: "internalData",
          외용: "externalData",
          주사: "injectionData",
          검사: "examinationData",
          병리: "pathologyData",
          수혈: "bloodtransData",
          방사: "radiationData",
          초음: "ultrasoundList",
          CT: "CTData",
          MR: "MRData",
          물리: "physicalData",
        };
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
            const categorizedData = {};
            categorizedData["otherData"] = [];
            for (const [division, listName] of Object.entries(divisions)) {
              categorizedData[listName] = response.data.filter(
                (item) => item.division === division
              );
            }

            // "otherData" 배열에 속하지 않는 항목 추가
            for (const item of response.data) {
              if (!(item.division in divisions)) {
                categorizedData["otherData"].push(item);
              }
            }

            dispatch(setInternalMedList(categorizedData["internalData"]));
            dispatch(setExternalMedList(categorizedData["externalData"]));
            dispatch(setInjectionList(categorizedData["injectionData"]));
            dispatch(setExaminationList(categorizedData["examinationData"]));
            dispatch(setPathologyList(categorizedData["pathologyData"]));
            dispatch(setBloodTransList(categorizedData["bloodtransData"]));
            dispatch(setRadiationList(categorizedData["radiationData"]));
            dispatch(setUltrasoundList(categorizedData["ultrasoundList"]));
            dispatch(setCTList(categorizedData["CTData"]));
            dispatch(setMRList(categorizedData["MRData"]));
            dispatch(setPhysicalList(categorizedData["physicalData"]));
            dispatch(setOthersList(categorizedData["otherData"]));
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

      {pList.length > 0 ? (
        pList.map((patient, index) => (
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
        ))
      ) : (
        <Card
          className="card-list"
          style={{
            height: "100px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Text style={{ color: "#0765A8" }}>
            검색 조건과 일치하는 데이터가 없습니다.
          </Card.Text>
        </Card>
      )}
    </>
  );
}

export default PatientsContainer;
