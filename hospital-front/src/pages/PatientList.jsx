import React from "react";
import Header from "../components/Header";
import PatientsContainer from "../containers/PatientsContainer";
import { Container } from "react-bootstrap";
function PatientList() {
  return (
    <>
      <Header />
      <Container>
        <PatientsContainer />
      </Container>
    </>
  );
}

export default PatientList;
