import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDateList: null, //오더날짜리스트
  selectDate: null, //선택한 날짜

  InternalMedList: null, // 내복
  ExternalMedList: null, // 외복
  InjectionList: null, // 주사
  ExaminationList: null, // 검사
  PathologyList: null, // 병리
  BloodTransList: null, // 수혈
  RadiationList: null, // 방사
  UltrasoundList: null, // 초음
  CTList: null, // CT
  MRList: null, // MR
  PhysicalList: null, //물리
  OthersList: null, //기타
};

const orderSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    setOrderDateList(state, action) {
      state.orderDateList = action.payload;
    },
    setSelectDate(state, action) {
      state.selectDate = action.payload;
    },
    setInternalMedList(state, action) {
      state.InternalMedList = action.payload;
    },
    setExternalMedList(state, action) {
      state.ExternalMedList = action.payload;
    },
    setInjectionList(state, action) {
      state.InjectionList = action.payload;
    },
    setExaminationList(state, action) {
      state.ExaminationList = action.payload;
    },
    setPathologyList(state, action) {
      state.PathologyList = action.payload;
    },
    setBloodTransList(state, action) {
      state.BloodTransList = action.payload;
    },
    setRadiationList(state, action) {
      state.RadiationList = action.payload;
    },
    setUltrasoundList(state, action) {
      state.UltrasoundList = action.payload;
    },
    setCTList(state, action) {
      state.CTList = action.payload;
    },
    setMRList(state, action) {
      state.MRList = action.payload;
    },
    setPhysicalList(state, action) {
      state.PhysicalList = action.payload;
    },
    setOthersList(state, action) {
      state.OthersList = action.payload;
    },
  },
});

export const {
  setOrderDateList,
  setSelectDate,
  setInternalMedList,
  setExternalMedList,
  setInjectionList,
  setExaminationList,
  setPathologyList,
  setBloodTransList,
  setRadiationList,
  setUltrasoundList,
  setCTList,
  setMRList,
  setPhysicalList,
  setOthersList,
} = orderSlice.actions;
export default orderSlice.reducer;
