import React from "react";
import Header from "../components/Header";
import PatientContainer from "../containers/PatientContainer";
import { Container } from "react-bootstrap";
function PatientList() {
  return (
    <>
      <Header />
      <Container>
        <PatientContainer />
      </Container>
    </>
  );
}

export default PatientList;
