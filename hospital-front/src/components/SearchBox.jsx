import React from "react";
import { Form, Button, InputGroup, Stack } from "react-bootstrap";
import "../styles/patientListPage.scss";

function SearchBox() {
  return (
    <>
      <Form id="search-box">
        <Stack direction="horizontal" className="search-title mb-3">
          <h4 style={{ margin: 0 }}>환자 정보 검색</h4>
          <Button size="sm">검색</Button>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              의사코드
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">
              환자명
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Form.Select aria-label="Default select example">
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
