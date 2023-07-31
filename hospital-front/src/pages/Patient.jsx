import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Button, Table, Tabs, Tab } from "react-bootstrap";
import "../styles/patientPage.scss";

import { useNavigate } from "react-router-dom";

import DatePickerCustom from "../components/DatePicker";
import OrderTable from "../containers/OrderTable";
import InfoTable from "../components/InfoTable";
import OrderSidebar from "../components/OrderSidbar";
import ResultSidebar from "../components/ResultSidebar";
// import Tab1 from "../containers/Tab1";
function Patient() {
  const navigate = useNavigate();

  return (
    <div className="App2">
      <Header />
      <Container>
        <InfoTable />

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
