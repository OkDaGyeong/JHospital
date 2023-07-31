import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ResultTable from "../containers/ResultTable";
import "../styles/patientPage.scss";

import { MdInsertChartOutlined, MdDensitySmall } from "react-icons/md";

function ResultSidebar() {
  return (
    <>
      <Tab.Container
        id="order-tab"
        defaultActiveKey="#allResult"
        style={{ width: "100%" }}
      >
        <Row style={{ flexWrap: "nowrap" }}>
          <Col style={{ minWidth: "120px", maxWidth: "120px" }}>
            <ListGroup style={{ borderRadius: "0" }}>
              <ListGroup.Item
                action
                variant="primary"
                href="#allResult"
                className="menu-title"
              >
                <MdDensitySmall /> 전체
              </ListGroup.Item>
              <hr className="hr-style" />

              {/* <ListGroup.Item variant="" className="menu-title">
                <MdInsertChartOutlined /> 검사명
              </ListGroup.Item> */}
              <span
                className="menu-title"
                style={{
                  marginBottom: "7px",
                }}
              >
                <MdInsertChartOutlined /> 검사명
              </span>
              <ListGroup.Item action href="#medicine1">
                임상화학
              </ListGroup.Item>
              <ListGroup.Item action href="#medicine2">
                혈액학
              </ListGroup.Item>

              <ListGroup.Item action href="#injection">
                뇨화학
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col style={{ overflow: "hidden" }}>
            <Tab.Content>
              <Tab.Pane eventKey="#allResult">
                <ResultTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#medicine1">
                <ResultTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#medicine2">
                <ResultTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#injection">
                <ResultTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam1">
                <ResultTable />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default ResultSidebar;
