import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import "../styles/patientListPage.scss";

function SearchBox() {
  return (
    <>
      <Form id="search-box" className="card">
        <Stack direction="horizontal" className="search-title mb-3">
          <h4 style={{ margin: 0 }}>환자 정보 검색</h4>
          <Button size="sm" className="text-white">
            검색
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={3} id="search-input-box">
          <Form.Control type="text" placeholder="의료진 코드" />

          <Form.Control type="text" placeholder="환자명" />

          <Form.Select>
            <option>병동선택</option>
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
