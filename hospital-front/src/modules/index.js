import { combineReducers } from "redux";
// import counterSlice from "./counterSlice";
import auth from "./auth";
const rootReducer = combineReducers({
  auth,
  // counterSlice,
});
export default rootReducer;

// modules폴더안의 파일은 import rootReducer from './modules';를 적음으로써 불러올 수 있음
