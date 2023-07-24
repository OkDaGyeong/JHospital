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
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default InfoTable;
