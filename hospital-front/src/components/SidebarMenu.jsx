import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import OrderTable from "../containers/OrderTable";
import "../styles/patientPage.scss";

import {
  MdOndemandVideo,
  MdInsertChartOutlined,
  MdDensitySmall,
} from "react-icons/md";
import { BiInjection } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { BsClipboardCheck, BsFileEarmarkPpt } from "react-icons/bs";

function SidebarMenu() {
  return (
    <>
      <Tab.Container
        id="order-tab"
        defaultActiveKey="#medicine1"
        style={{ width: "100%" }}
      >
        <Row style={{ flexWrap: "nowrap" }}>
          <Col style={{ minWidth: "100px", maxWidth: "100px" }}>
            <ListGroup style={{ borderRadius: "0" }}>
              <ListGroup.Item
                style={{
                  fontWeight: "600",
                  border: "none",
                  marginBottom: "3px",
                  padding: "8px 5px",
                  fontSize: "17px",
                  // color: "#20bccc",
                }}
                action
                href="#all"
              >
                <MdDensitySmall /> 전체
              </ListGroup.Item>

              {/* <ListGroup.Item variant="primary">약</ListGroup.Item> */}
              <span className="menu-title">
                <CgPill /> 약
              </span>
              <ListGroup.Item action href="#medicine1">
                내복
              </ListGroup.Item>
              <ListGroup.Item action href="#medicine2">
                외복
              </ListGroup.Item>

              {/* <ListGroup.Item variant="primary">주사</ListGroup.Item> */}
              <span className="menu-title">
                <BiInjection /> 주사
              </span>
              <ListGroup.Item action href="#injection">
                주사
              </ListGroup.Item>

              {/* <ListGroup.Item variant="primary">검사</ListGroup.Item> */}
              <span className="menu-title">
                <MdInsertChartOutlined /> 검사
              </span>
              <ListGroup.Item action href="#exam1">
                검사
              </ListGroup.Item>
              <ListGroup.Item action href="#exam2">
                병리
              </ListGroup.Item>
              <ListGroup.Item action href="#exam3">
                수혈
              </ListGroup.Item>

              {/* <ListGroup.Item variant="primary">영상</ListGroup.Item> */}
              <span className="menu-title">
                <MdOndemandVideo /> 영상
              </span>

              <ListGroup.Item action href="#imaging1">
                방사
              </ListGroup.Item>
              <ListGroup.Item action href="#imaging2">
                초음
              </ListGroup.Item>
              <ListGroup.Item action href="#imaging3">
                CT
              </ListGroup.Item>
              <ListGroup.Item action href="#imaging4">
                MR
              </ListGroup.Item>

              {/* <ListGroup.Item variant="primary">물리</ListGroup.Item> */}
              <span className="menu-title">
                <BsFileEarmarkPpt /> 물리
              </span>
              <ListGroup.Item action href="#physical">
                물리
              </ListGroup.Item>

              {/* <ListGroup.Item variant="primary">기타</ListGroup.Item> */}
              <span className="menu-title">
                <BsClipboardCheck /> 기타
              </span>
              <ListGroup.Item action href="#other">
                기타
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col style={{ overflow: "hidden" }}>
            <Tab.Content>
              <Tab.Pane eventKey="#medicine1">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#medicine2">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#injection">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam1">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam2">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam3">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging1">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging2">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging3">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging4">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#physical">
                <OrderTable />
              </Tab.Pane>
              <Tab.Pane eventKey="#other">
                <OrderTable />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default SidebarMenu;
