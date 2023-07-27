import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "../styles/patientListPage.scss";
import { useSelector, useDispatch } from "react-redux";

import { setSearchData, setWard } from "../modules/search";
import axios from "axios";
function SearchBox({ handleSearch }) {
  // const employeeno = useSelector((state) => state.auth.employeeno);
  const { employeeno, patient, ward } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleWardChange = (event) => {
    const selectedWard = event.target.value;
    dispatch(setWard(selectedWard));
  };
  return (
    <>
      <Form id="search-box" className="card">
        <Stack direction="horizontal" className="search-title mb-3">
          <h4 style={{ margin: 0 }}>환자 정보 검색</h4>
          <Button size="sm" className="text-white" onClick={handleSearch}>
            검색
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={3} id="search-input-box">
          <Form.Control
            type="text"
            placeholder="의료진 코드"
            value={employeeno}
            onChange={(e) =>
              dispatch(
                setSearchData({ patient: patient, employeeno: e.target.value })
              )
            }
          />

          <Form.Control
            type="text"
            placeholder="환자명"
            value={patient}
            onChange={(e) =>
              dispatch(
                setSearchData({
                  employeeno: employeeno,
                  patient: e.target.value,
                })
              )
            }
          />

          <Form.Select onChange={handleWardChange}>
            <option value="">병동선택</option>
            <option value="31">31병동</option>
            <option value="51">51병동</option>
            <option value="61">61병동</option>
            <option value="62">62병동</option>
            <option value="71">71병동</option>
            <option value="72">72병동</option>
          </Form.Select>
        </Stack>
      </Form>
    </>
  );
}

export default SearchBox;
