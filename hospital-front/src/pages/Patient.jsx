import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Button, Table, Tabs, Tab } from "react-bootstrap";
import "../styles/patientPage.scss";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import DatePickerCustom from "../components/DatePicker";
import Tab2 from "../containers/Tab2";
function Patient() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}>
      <Header />
      <Container>
        <div>
          <h3 style={{ marginTop: "20px" }}>환자 기본 정보</h3>
          <Table bordered responsive className="patient-table">
            <tbody>
              <tr>
                <th>차트번호</th>
                <td>123123</td>
                <th>병동/병실</th>
                <td>51/5101</td>
                <th>환자명</th>
                <td>홍길동</td>
                <th>나이/성별</th>
                <td>44/남</td>
              </tr>
              <tr>
                <th>진료과</th>
                <td>OS</td>
                <th>진료의</th>
                <td>ㅇㅇㅇ</td>
                <th>입원일자</th>
                <td>2023-02-23</td>
                <th>비고</th>
                <td>i,l</td>
              </tr>
              <tr>
                <th>보험유형</th>
                <td>건강보험</td>
                <th>진단명</th>
                <td colSpan={6}></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <hr />

        <div>
          <Tabs
            defaultActiveKey="pState"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="pState" title="환자상태">
              환자 상태
            </Tab>
            <Tab eventKey="prescription" title="처방내역">
              {/* 처방 내역 */}
              <DatePickerCustom />
              <Tab2 />
            </Tab>
            <Tab eventKey="inspection" title="검사결과">
              검사결과
            </Tab>
            <Tab eventKey="reading" title="판독결과">
              판독결과
            </Tab>
          </Tabs>
        </div>

        <div id="b-btn">
          <Button
            className="text-white"
            onClick={(e) => navigate("/patient-list")}
          >
            뒤로가기
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Patient;
