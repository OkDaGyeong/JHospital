import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Button, Form, Tabs, Tab } from "react-bootstrap";
import "../styles/patientPage.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DatePickerCustom from "../components/DatePicker";
import OrderTable from "../containers/OrderTable";
import InfoTable from "../components/InfoTable";
import OrderSidebar from "../components/OrderSidbar";
import ResultSidebar from "../components/ResultSidebar";

import { setOrderNull } from "../modules/order";
import { useParams } from "react-router-dom";
// import Tab1 from "../containers/Tab1";
import { useDispatch } from "react-redux";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {
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
function Patient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { patientId } = useParams();
  const patientInfo =
    useSelector((state) => state.patients.patientList[patientId]) || [];

  // console.log(patientInfo);

  const orderDateList = useSelector((state) => state.order.orderDateList);
  const selectDate = useSelector((state) => state.order.selectDate);
  const reViewPatient = (patientNo, date, department, code, subCode, sdate) => {
    dispatch(setSelectDate(sdate));

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
        console.log("이거실행됨");
        console.log(response.data);
        const categorizedData = {};
        categorizedData["otherData"] = [];
        for (const [division, listName] of Object.entries(divisions)) {
          categorizedData[listName] = response.data.filter(
            (item) => item.division === division
          );
        }

        // "otherData" 배열에 속하지 않는 항목들을 추가합니다.
        for (const item of response.data) {
          if (!(item.division in divisions)) {
            categorizedData["otherData"].push(item);
          }
        }

        // 각각의 dispatch 함수를 사용하여 데이터를 처리합니다.
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
  };

  const patientNo = patientInfo.patientNo;
  const department = patientInfo.department;
  const code = patientInfo.code;
  const subCode = patientInfo.subCode;
  const date = patientInfo.date;

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    console.log("이거까진 됨 " + selectedDate);
    reViewPatient(patientNo, date, department, code, subCode, selectedDate);
  };

  const handleNextDate = () => {
    const selectedIndex = orderDateList.indexOf(selectDate);
    if (selectedIndex > 0) {
      const previousDate = orderDateList[selectedIndex - 1];
      dispatch(setSelectDate(previousDate));
      reViewPatient(patientNo, date, department, code, subCode, previousDate);
    }
  };

  const handlePreviousDate = () => {
    const selectedIndex = orderDateList.indexOf(selectDate);
    if (selectedIndex < orderDateList.length - 1) {
      const nextDate = orderDateList[selectedIndex + 1];
      dispatch(setSelectDate(nextDate));
      reViewPatient(patientNo, date, department, code, subCode, nextDate);
    }
  };
  return (
    <div className="App2">
      <Header />
      <Container>
        <InfoTable
          ward={patientInfo.ward} //병동
          room={patientInfo.room} //병실
          pName={patientInfo.patientName} //환자명
          age={patientInfo.age} //환자나이
          gender={patientInfo.sex} //환자성별
          date={patientInfo.date} //입원날짜
          pNum={patientInfo.patientNo} //차트번호
          department={patientInfo.department} //진료과
          doctor={patientInfo.doctorName} //진료의
          insurance={patientInfo.insurance} //보험명
          diagnosis={patientInfo.diagnosis} //진단명
          note={patientInfo.note} //비고
        />

        <hr />

        <div style={{ height: "800px" }}>
          {/* <DatePickerCustom /> */}
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row-reverse",
              gap: "10px",
            }}
          >
            <button id="btn-nextDate" onClick={handleNextDate}>
              <AiFillCaretRight />
            </button>
            <Form.Select
              onChange={handleDateChange}
              value={selectDate}
              style={{ width: "140px" }}
            >
              {orderDateList.map((date) => (
                <option key={date} value={date}>
                  {date.substring(0, 4)}/{date.substring(4, 6)}/
                  {date.substring(6, 8)}
                </option>
              ))}
            </Form.Select>{" "}
            <button id="btn-preDate" onClick={handlePreviousDate}>
              <AiFillCaretLeft />
            </button>
          </div>
          <Tabs
            defaultActiveKey="pState"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="pState" title="환자상태">
              환자 상태
              {/* <Tab1 /> */}
            </Tab>
            <Tab eventKey="prescription" title="처방내역">
              {/* 처방 내역 */}

              <OrderSidebar patientInfo={patientInfo} />
              {/* <OrderTable /> */}
            </Tab>
            <Tab eventKey="inspection" title="검사결과">
              <ResultSidebar />
            </Tab>
            <Tab eventKey="reading" title="판독결과">
              판독결과
            </Tab>
          </Tabs>
        </div>

        <div
          id="b-btn"
          style={{
            margin: "20px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            className="text-white"
            onClick={(e) => {
              navigate("/");
              dispatch(setOrderNull());
            }} //이전 페이지로 이동
          >
            뒤로가기
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Patient;
