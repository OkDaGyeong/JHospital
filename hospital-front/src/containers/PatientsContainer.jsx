import React, { useState } from "react";

import UserBox from "../components/UserBox";
import InfoBox from "../components/InfoBox";
import SearchBox from "../components/SearchBox";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PatientContainer() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap-reverse",
          padding: "25px 0",
        }}
      >
        <SearchBox />
        <UserBox doctor="조정현" department="IM" />
      </Stack>

      <InfoBox
        ward="31"
        room="326"
        pName="김윤임"
        age="75"
        gender="F"
        date="2023.07.11"
        pNum="08033373"
        department="IM"
        doctor="조정현"
        insurance="건보"
        diagnostic="부위가 명시되지 않은 요로감염"
        onSelect={(e) => {
          navigate("/patient/123");
        }}
      />
      <InfoBox
        ward="31"
        room="326"
        pName="김윤임"
        age="75"
        gender="F"
        date="2023.07.11"
        pNum="08033373"
        department="IM"
        doctor="조정현"
        insurance="건보"
        diagnostic="부위가 명시되지 않은 요로감염"
      />
    </>
  );
}

export default PatientContainer;
