import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer, initialState } from "../redux/reducer";
import { Staffs } from "../redux/Staffs";
import thunk from "redux-thunk";
import logger from "redux-logger";
//Tạo Store lưu trữ với reducer và state ban đầu
export const configureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
    })
  );
  applyMiddleware(thunk, logger);
  return store;
};
