import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  error: null,
};

// 로그인 요청을 보내는 비동기 액션
export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await axios.post("/api/", credentials);
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        // 로그인 실패 처리 로직을 추가하세요
      });
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;

// // 로그인 요청을 보내는 비동기 액션
// export const login = createAsyncThunk("auth/login", async (credentials) => {
//   try {
//     const response = await axios.post("/api/login", credentials);
//     return response.data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// });

export default authSlice.reducer;
