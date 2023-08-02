import { combineReducers } from "redux";

import auth from "./auth";
import search from "./search";
import patients from "./patients";
import order from "./order";

const appReducer = combineReducers({
  auth,
  search,
  patients,
  order,
});

const rootReducer = (state, action) => {
  // 로그아웃 액션 시 모든 슬라이스를 초기 상태로 리셋
  if (action.type === "auth/logoutSuccess") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
