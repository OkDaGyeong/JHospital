import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 로컬 스토리지 사용
import rootReducer from "./modules";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [ReduxThunk, logger], // 사용할 미들웨어 나열
  devTools: true, // 개발자 도구 사용 여부 (기본값은 true)
  preloadedState: {
    // 리덕스 스토어가 생성될 때 초기값 설정
  },
});

const persistor = persistStore(store);

export { store, persistor };
