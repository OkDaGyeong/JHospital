import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk, logger], //사용할 미들웨어 나열
  devTools: true, //개발자 도구 사용여부 (기본값은 true)
  preloadedState: {
    //리덕스 스토어가 생성될 때 초기값 설정
  },
});

export default store;
