/* eslint-disable default-case */
import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = { isLoading: true, errMess: null, staffs: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };
    case ActionTypes.STAFFS_LOADING:
      return { ...state, isLoading: true, staffs: [], errMess: null };
    case ActionTypes.STAFFS_FAILED:
      return {
        ...state,
        isLoading: false,
        staffs: [],
        errMess: action.payload,
      };
  }
};
