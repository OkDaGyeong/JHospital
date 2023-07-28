import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, //로그인 여부
  username: null, //의료진 이름
  employeeno: null, //의료진 코드
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.employeeno = action.payload.employeeno;
    },
    logoutSuccess(state) {
      return initialState;
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;
