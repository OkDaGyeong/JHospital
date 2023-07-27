import { combineReducers } from "redux";

import auth from "./auth";
import search from "./search";
const rootReducer = combineReducers({
  auth,
  search,
});
export default rootReducer;

// modules폴더안의 파일은 import rootReducer from './modules';를 적음으로써 불러올 수 있음
