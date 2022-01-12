import { createStore, combineReducers, applyMiddleware } from "redux";
import { Staffs } from "../redux/Staffs";
import { Departments } from "../redux/departments";
import { Salary } from "./staffSalary";
import thunk from "redux-thunk";
import logger from "redux-logger";
//Tạo Store lưu trữ với reducer và state ban đầu
export const configureStore = () => {
  //export to App.js
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      salary: Salary,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
