import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctorList: [],
};

const doctorSlice = createSlice({
  name: "doctorList",
  initialState,
  reducers: {
    setDoctorList(state, action) {
      state.doctorList = action.payload;
    },
  },
});

export const { setDoctorList } = doctorSlice.actions;
export default doctorSlice.reducer;
