import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "../styles/patientListPage.scss";
import { useSelector, useDispatch } from "react-redux";

import { setSearchData, setWard } from "../modules/search";
import axios from "axios";

function SearchBox({ handleSearch }) {
  const suggestions = ["00D020", "00D024", "00A914", "00A924", "00D122"]; // 의사목록 받아오기
  const sPatients = useSelector((state) => state.patients.patientList); //환자명 자동완성

  // const employeeno = useSelector((state) => state.auth.employeeno);
  const { employeeno, patient, ward } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleWardChange = (event) => {
    const selectedWard = event.target.value;
    dispatch(setWard(selectedWard));
  };

  // const [searchEmployeeno, setSearchEmployeeno] = useState("");
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSearchEmployeeno(value);
  // };

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
            // onChange={handleChange}
            list="suggestions" // input을 datalist와 연결
            onChange={(e) =>
              dispatch(
                setSearchData({
                  patient: patient,
                  employeeno: e.target.value,
                })
              )
            }
          />
          <datalist id="suggestions">
            {/* datalist 요소를 사용하여 제안을 표시합니다. */}
            {suggestions.map((suggestion) => (
              <option key={suggestion} value={suggestion} />
            ))}
          </datalist>

          <Form.Control
            type="text"
            placeholder="환자명"
            value={patient}
            list="suggestions-patient"
            onChange={(e) =>
              dispatch(
                setSearchData({
                  employeeno: employeeno,
                  patient: e.target.value,
                })
              )
            }
          />
          <datalist id="suggestions-patient">
            {sPatients.map((suggestion, index) => (
              <option key={index} value={suggestion.patientName} />
            ))}
          </datalist>

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
