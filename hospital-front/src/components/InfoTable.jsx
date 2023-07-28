import React from "react";
import { Table } from "react-bootstrap";
import "../styles/patientListPage.scss";

function InfoTable({
  ward, //병동
  room, //병실
  pName, //환자명
  age, //환자나이
  gender, //환자성별
  date, //입원날짜
  pNum, //차트번호
  department, //진료과
  doctor, //진료의
  insurance, //보험명
  diagnostic, //진단명
  onSelect,
}) {
  return (
    <>
      <h4 style={{ marginTop: "20px" }}>환자 기본 정보</h4>
      <Table bordered responsive className="patient-table">
        <tbody>
          <tr>
            <th>차트번호</th>
            <td>{pNum}123123</td>
            <th>병동/병실</th>
            <td>
              {ward}
              {room}51/5101
            </td>
            <th>환자명</th>
            <td>{pName}홍길동</td>
            <th>나이/성별</th>
            <td>
              {age}
              {gender}44/남
            </td>
          </tr>
          <tr>
            <th>진료과</th>
            <td>{department}OS</td>
            <th>진료의</th>
            <td>{doctor}ㅇㅇㅇ</td>
            <th>입원일자</th>
            <td>{date}2023-02-23</td>
            <th>비고</th>
            <td>{}i,l</td>
          </tr>
          <tr>
            <th>보험유형</th>
            <td>{insurance}건강보험</td>
            <th>진단명</th>
            <td
              colSpan={6}
              style={{
                textAlign: "left",
              }}
            >
              {diagnostic}부위가 명시되지 않은 요로감염
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default InfoTable;
