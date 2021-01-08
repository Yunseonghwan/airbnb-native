// state값 변경 부분 store 로 전달

import { combineReducers } from "redux";
import usersReducer from "./usersSlice";
import roomsReducer from "./roomsSlice";

export default combineReducers({
  usersReducer,
  roomsReducer,
});
