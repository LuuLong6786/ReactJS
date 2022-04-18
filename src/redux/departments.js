import * as ActionTypes from "./ActionTypes";

export const Departments = (
  state = {
    isLoading: true,
    errMess: null,
    dept: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dept: action.payload,
      };
    case ActionTypes.DEPARTMENTS_LOADING:
      return { ...state, isLoading: true, errMess: null, dept: [] };
    case ActionTypes.DEPARTMENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, dept: [] };
    default:
      return state;
  }
};
