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
  diagnosis, //진단명
  note,
  onSelect,
}) {
  return (
    <>
      <h4 style={{ marginTop: "20px" }}>환자 기본 정보</h4>
      <Table bordered responsive className="patient-table">
        <tbody>
          <tr>
            <th>차트번호</th>
            <td>{pNum}</td>
            <th>환자명</th>
            <td style={{ color: "#05438A" }}>{pName}</td>
            <th>병동/병실</th>
            <td>
              {ward} / {room}
            </td>

            <th>나이/성별</th>
            <td>
              {age} / {gender}
            </td>
          </tr>
          <tr>
            <th>진료과</th>
            <td>{department}</td>
            <th>진료의</th>
            <td>{doctor}</td>
            <th>입원일자</th>
            <td>{date}</td>
            <th>비고</th>
            <td>{note}</td>
          </tr>
          <tr>
            <th>보험유형</th>
            <td>{insurance}</td>
            <th>진단명</th>
            <td
              colSpan={5}
              style={{
                textAlign: "left",
                paddingLeft: "10px",
                color: "#05438A",
              }}
            >
              {diagnosis}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default InfoTable;
