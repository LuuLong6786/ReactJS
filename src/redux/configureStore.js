import { createStore } from "redux";
import { reducer, initialState } from "../redux/reducer";
//Tạo Store lưu trữ với reducer và state ban đầu
export const configureStore = () => {
  const store = createStore(reducer, initialState);
  return store;
};
