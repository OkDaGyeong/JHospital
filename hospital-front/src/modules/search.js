import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeno: null, //의료진 코드
  patient: null, //환자이름
  ward: null, //병동
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData(state, action) {
      const { employeeno, patient, ward } = action.payload;
      state.employeeno = employeeno;
      state.patient = patient;
      state.ward = ward;
    },
  },
});

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;
