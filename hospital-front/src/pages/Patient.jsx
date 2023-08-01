import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Button, Table, Tabs, Tab } from "react-bootstrap";
import "../styles/patientPage.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DatePickerCustom from "../components/DatePicker";
import OrderTable from "../containers/OrderTable";
import InfoTable from "../components/InfoTable";
import OrderSidebar from "../components/OrderSidbar";
import ResultSidebar from "../components/ResultSidebar";

import { useParams } from "react-router-dom";
// import Tab1 from "../containers/Tab1";
function Patient() {
  const navigate = useNavigate();

  const { patientId } = useParams();
  const patientInfo =
    useSelector((state) => state.patients.patientList[patientId]) || [];
  // console.log(patientInfo);
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
          <DatePickerCustom />
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

              <OrderSidebar />
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
            onClick={(e) => navigate("/")} //이전 페이지로 이동
          >
            뒤로가기
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Patient;
