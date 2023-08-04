import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientList: [],
};

const patientSlice = createSlice({
  name: "patientList",
  initialState,
  reducers: {
    setPatientList(state, action) {
      state.patientList = action.payload;
    },
  },
});

export const { setPatientList } = patientSlice.actions;
export default patientSlice.reducer;
