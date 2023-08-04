import React from "react";
import { Row, Col, Button, Card, Stack } from "react-bootstrap";
import "../styles/patientListPage.scss";

function InfoBox({
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
      <Card className="card-list">
        <Card.Header>
          <Stack
            direction="horizontal"
            style={{
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            className="info-box-title"
          >
            <span>
              {ward}병동 / {room}호
            </span>
            <span className="c-navy">
              {pName} / {age}세 / {gender}
            </span>
            <span>{date} ~</span>
            <Button size="sm" variant="secondary" onClick={onSelect}>
              선택
            </Button>
          </Stack>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>NO.{pNum}</Col>
            <Col>{department}</Col>
            <Col style={{ padding: "0", minWidth: "60px" }}>{doctor}</Col>
            <Col style={{ minWidth: "40px" }} className="longtext-box">
              {insurance}
            </Col>
            <Col xs={11} sm={5} className="longtext-box">
              {diagnostic}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default InfoBox;
