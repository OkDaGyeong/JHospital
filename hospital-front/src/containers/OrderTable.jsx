import React, { useState } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/patientPage.scss";
import { useSelector } from "react-redux";
function OrderTable({ dataList }) {
  const AllData = useSelector((state) => state.order);
  // const dataList = useSelector((state) => state.order.InternalMedList);

  return (
    <>
      <div className="table-container">
        <Table id="order-list-table" bordered hover>
          <thead className="sticky-thead">
            <tr>
              <th>처방</th>
              <th>구분</th>
              <th>코드</th>
              <th>처방명</th>
              <th>용량</th>
              <th>수</th>
              <th>횟</th>
              <th>일</th>
              <th>P</th>
              <th>투</th>
              <th>용법/검체</th>
              <th>급</th>
              <th>MG</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {dataList && dataList.length > 0 ? (
              dataList.map((item, index) => (
                <tr key={index}>
                  <td>{item.order}</td>
                  <td>{item.division}</td>
                  <td>{item.recipeCode}</td>
                  {/* <td style={{ textAlign: "left" }}>{item.recipe}</td> */}
                  <td>{item.recipe}</td>
                  <td>{item.volume}</td>
                  <td>{item.quantity}</td>
                  <td>{item.number}</td>
                  <td>{item.days}</td>
                  <td>{item.prn}</td>
                  <td>{item.routes}</td>
                  <td>{item.usageSamplePart}</td>
                  <td>{item.medicine}</td>
                  <td>{item.mix}</td>
                  <td>{item.comment}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="14"
                  style={{
                    color: "#20bccc",
                  }}
                >
                  표시할 데이터가 없습니다
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default OrderTable;
