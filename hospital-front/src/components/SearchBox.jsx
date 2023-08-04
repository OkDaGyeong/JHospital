import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "../styles/patientListPage.scss";
import { useSelector, useDispatch } from "react-redux";

import { setSearchData } from "../modules/search";
import axios from "axios";
import { setPatientList } from "../modules/patients";
function SearchBox() {
  const suggestions = useSelector((state) => state.doctors.doctorList);
  const sPatients = useSelector((state) => state.patients.patientList) || []; //환자명 자동완성

  const { employeeno, patient, ward } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [localSearchData, setLocalSearchData] = useState({
    employeeno: employeeno,
    patient: patient,
    ward: ward,
  });

  const handleWardChange = (event) => {
    const selectedWard = event.target.value;
    setLocalSearchData({ ...localSearchData, ward: selectedWard });
  };

  const handleSearch = () => {
    if (
      !localSearchData.employeeno ||
      !suggestions.some(
        (suggestion) => suggestion.employeeNo === localSearchData.employeeno
      )
    ) {
      // 의료진 코드가 없거나 목록에 없는 경우
      alert("의료진 코드를 올바르게 입력해주세요.");
      return;
    }

    dispatch(setSearchData(localSearchData));
    axios
      .get("/patient/list", {
        // params: localSearchData,
        params: {
          employeeNo: localSearchData.employeeno,
          patientName: localSearchData.patient,
          ward: localSearchData.ward,
        },
      })
      .then((response) => {
        // console.log(localSearchData);
        // console.log(response.data);
        // pList = response.data || [];
        dispatch(setPatientList(response.data));
        // setPatients(response.data);
      })
      .catch((error) => {
        console.error("환자목록 오류", error);
      });
    console.log("employeeNo:", employeeno);
    console.log("patientName:", patient);
    console.log("ward:", ward);
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
            type="search"
            placeholder="의료진 코드"
            value={localSearchData.employeeno}
            list="suggestions" // input을 datalist와 연결
            onChange={(e) =>
              setLocalSearchData({
                ...localSearchData,
                employeeno: e.target.value,
              })
            }
          />
          <datalist id="suggestions">
            {suggestions.map((suggestion) => (
              <option key={suggestion.employeeNo} value={suggestion.employeeNo}>
                {suggestion.nameK}
              </option>
            ))}
          </datalist>

          <Form.Control
            type="search"
            placeholder="환자명"
            value={localSearchData.patient}
            list="suggestions-patient"
            onChange={(e) =>
              setLocalSearchData({
                ...localSearchData,
                patient: e.target.value,
              })
            }
          />
          <datalist id="suggestions-patient">
            {sPatients.map((suggestion, index) => (
              <option key={index} value={suggestion.patientName} />
            ))}
          </datalist>

          <Form.Select onChange={handleWardChange} value={localSearchData.ward}>
            <option value="">병동선택</option>
            <option value="21">21병동</option>
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
