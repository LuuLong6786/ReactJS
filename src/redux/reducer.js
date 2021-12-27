import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

//Khởi tạo state ban đầu từ data import vào
export const initialState = {
  staff: STAFFS,
  department: DEPARTMENTS,
};
//Tạo reducer với state ban đầu
export const reducer = (state = initialState, action) => {
  return state;
};
