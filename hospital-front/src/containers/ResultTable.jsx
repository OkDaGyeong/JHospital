import React from "react";
import { Table } from "react-bootstrap";
import "../styles/patientPage.scss";

function ResultTable({
  order, //처방
  division, //구분
  recipe, //코드
  recipeCode, //처방명
  volume, //용량
  quantity, //수
  number, //횟
  days, //일
  prn, //P
  routes, //투방
}) {
  return (
    <>
      <div className="table-container">
        <Table id="order-list-table" bordered hover>
          <thead className="sticky-thead">
            <tr>
              <th colSpan={7}>검사결과</th>
              <th colSpan={3}>이전결과</th>
            </tr>
            <tr>
              <th>검사명</th>
              <th>검사결과</th>
              <th>주석1</th>
              <th>주석2</th>
              <th>최소</th>
              <th>최대</th>
              <th>단위</th>
              <th>결과1</th>
              <th>결과2</th>
              <th>결과3</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 50 }).map((_, index) => (
              <tr key={index}>
                <td>검사명</td>
                <td>검사결과</td>
                <td>주석1</td>
                <td>주석2</td>
                <td>최소</td>
                <td>최대</td>
                <td>단위</td>
                <td>결과1</td>
                <td>결과2</td>
                <td>결과3</td>
                {/* <td key={order}>{order}</td>
                <td key={division}>{division}</td>
                <td key={recipe}>{recipe}</td>
                <td key={recipeCode}>{recipeCode}</td>
                <td key={volume}>{volume}</td>
                <td key={quantity}>{quantity}</td>
                <td key={number}>{number}</td>
                <td key={days}>{days}</td>
                <td key={prn}>{prn}</td>
                <td key={routes}>{routes}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ResultTable;
