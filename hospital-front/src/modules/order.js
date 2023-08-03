import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDateList: [], //오더날짜리스트
  selectDate: "", //선택한 날짜

  InternalMedList: [], // 내복
  ExternalMedList: [], // 외복
  InjectionList: [], // 주사
  ExaminationList: [], // 검사
  PathologyList: [], // 병리
  BloodTransList: [], // 수혈
  RadiationList: [], // 방사
  UltrasoundList: [], // 초음
  CTList: [], // CT
  MRList: [], // MR
  PhysicalList: [], //물리
  OthersList: [], //기타
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
    setOrderNull(state, action) {
      return initialState;
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
  setOrderNull,
} = orderSlice.actions;
export default orderSlice.reducer;
