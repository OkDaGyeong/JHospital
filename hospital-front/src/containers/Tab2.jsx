import React from "react";
import { Table } from "react-bootstrap";
import "../styles/patientPage.scss";

function Tab2({
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
  usageSamplePart, //용법/검체?
  medicine, //급
  mix, //MG?
  comment, //비고?
}) {
  return (
    <>
      <Table id="order-list-table" bordered responsive hover>
        <thead>
          <tr>
            <th className="sticky-header">처방</th>
            <th className="sticky-header">구분</th>
            <th className="sticky-header">코드</th>
            <th className="sticky-header">처방명</th>
            <th className="sticky-header">용량</th>
            <th className="sticky-header">수</th>
            <th className="sticky-header">횟</th>
            <th className="sticky-header">일</th>
            <th className="sticky-header">P</th>
            <th className="sticky-header">투</th>
            <th className="sticky-header">용법/검체</th>
            <th className="sticky-header">급</th>
            <th className="sticky-header">MG</th>
            <th className="sticky-header">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RC</td>
            <td>내복</td>
            <td>CTHRB90</td>
            <td>HERBEN SR TAB 90MG/1정 </td>
            <td></td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td>PO</td>
            <td>P0010</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {Array.from({ length: 14 }).map((_, index) => (
            <tr key={index}>
              <td>RC</td>
              <td>내복</td>
              <td>CTHRB90</td>
              <td>HERBEN SR TAB 90MG/1정 </td>
              <td></td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td></td>
              <td>PO</td>
              <td>P0010</td>
              <td></td>
              <td></td>
              <td></td>
              {/* <td key={order}>{order}</td>
              <td key={division}>{division}</td>
              <td key={recipe}>{recipe}</td>
              <td key={recipeCode}>{recipeCode}</td>
              <td key={volume}>{volume}</td>
              <td key={quantity}>{quantity}</td>
              <td key={number}>{number}</td>
              <td key={days}>{days}</td>
              <td key={prn}>{prn}</td>
              <td key={routes}>{routes}</td>
              <td key={usageSamplePart}>{usageSamplePart}</td>
              <td key={medicine}>{medicine}</td>
              <td key={mix}>{mix}</td>
              <td key={comment}>{comment}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Tab2;
