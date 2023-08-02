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
import { useSelector } from "react-redux";
function OrderSidebar({ patientInfo }) {
  const selectDate = useSelector((state) => state.order.selectDate);
  const dataList = useSelector((state) => state.order);

  // const dataListAll =

  return (
    <>
      <Tab.Container
        id="order-tab"
        defaultActiveKey="#all"
        style={{ width: "100%" }}
      >
        <Row style={{ flexWrap: "nowrap" }}>
          <Col style={{ minWidth: "120px", maxWidth: "120px" }}>
            <ListGroup style={{ borderRadius: "0" }}>
              <ListGroup.Item
                variant="primary"
                action
                href="#all"
                className="menu-title"
              >
                <MdDensitySmall /> 전체
              </ListGroup.Item>
              <hr className="hr-style" />
              <ListGroup.Item
                variant="primary"
                action
                href="#medicine"
                className="menu-title"
              >
                <CgPill /> 약 / 주사
              </ListGroup.Item>
              <ListGroup.Item action href="#medicine1">
                내복
              </ListGroup.Item>
              <ListGroup.Item action href="#medicine2">
                외복
              </ListGroup.Item>
              <ListGroup.Item action href="#injection">
                주사
              </ListGroup.Item>
              <hr className="hr-style" />

              <ListGroup.Item
                variant="primary"
                action
                href="#exam"
                className="menu-title"
              >
                <MdInsertChartOutlined /> 검사
              </ListGroup.Item>
              <ListGroup.Item action href="#exam1">
                검사
              </ListGroup.Item>
              <ListGroup.Item action href="#exam2">
                병리
              </ListGroup.Item>
              <ListGroup.Item action href="#exam3">
                수혈
              </ListGroup.Item>
              <hr className="hr-style" />

              <ListGroup.Item
                variant="primary"
                action
                href="#imaging"
                className="menu-title"
              >
                <MdOndemandVideo /> 영상
              </ListGroup.Item>
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

              <hr className="hr-style" />
              <ListGroup.Item
                variant="primary"
                action
                href="#physical"
                className="menu-title"
              >
                <BsFileEarmarkPpt /> 물리
              </ListGroup.Item>

              <hr className="hr-style" />
              <ListGroup.Item
                action
                href="#other"
                variant="primary"
                className="menu-title"
              >
                <BsClipboardCheck /> 기타
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col style={{ overflow: "hidden" }}>
            <Tab.Content>
              <Tab.Pane eventKey="#all">
                {/* 전체 */}
                <OrderTable dataList={dataList.InternalMedList} />
              </Tab.Pane>
              {/* 약/주사 : 내복, 외복, 주사 */}
              <Tab.Pane eventKey="#medicine">
                <OrderTable dataList={dataList.InternalMedList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#medicine1">
                <OrderTable dataList={dataList.InternalMedList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#medicine2">
                <OrderTable dataList={dataList.ExternalMedList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#injection">
                <OrderTable dataList={dataList.InjectionList} />
              </Tab.Pane>

              {/* 검사 : 검사, 병리, 수혈 */}
              <Tab.Pane eventKey="#exam">
                <OrderTable dataList={dataList.PathologyList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam1">
                <OrderTable dataList={dataList.ExaminationList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam2">
                <OrderTable dataList={dataList.PathologyList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#exam3">
                <OrderTable dataList={dataList.BloodTransList} />
              </Tab.Pane>

              {/* 영상 : 방사, 초음, CT, MR */}
              <Tab.Pane eventKey="#imaging">
                <OrderTable dataList={dataList.RadiationList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging1">
                <OrderTable dataList={dataList.RadiationList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging2">
                <OrderTable dataList={dataList.UltrasoundList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging3">
                <OrderTable dataList={dataList.CTList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#imaging4">
                <OrderTable dataList={dataList.MRList} />
              </Tab.Pane>

              {/* 물리, 기타 */}
              <Tab.Pane eventKey="#physical">
                <OrderTable dataList={dataList.PhysicalList} />
              </Tab.Pane>
              <Tab.Pane eventKey="#other">
                <OrderTable dataList={dataList.OthersList} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default OrderSidebar;
