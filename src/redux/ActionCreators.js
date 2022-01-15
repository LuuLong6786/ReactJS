import * as ActionTypes from "../redux/ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffs(response)))
    .catch((error) => dispatch(staffFailed(error.message)));
};

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});
export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});
export const staffFailed = (errMess) => ({
  action: ActionTypes.STAFFS_FAILED,
  payload: errMess,
});

export const fetchDept = () => (dispatch) => {
  dispatch(deptLoading(true));
  return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error :" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addDept(response)))
    .catch((error) => dispatch(deptFailed(error.message)));
};
export const addDept = (dept) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: dept,
});
export const deptFailed = (dept) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: dept,
});
export const deptLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});

export const fetchStaffSalary = () => (dispatch) => {
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "ERROR :" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addSalary(response)))
    .catch((error) => dispatch(salaryFailed(error)));
};

export const addSalary = (sal) => ({
  type: ActionTypes.ADD_STAFFSALARY,
  payload: sal,
});
export const salaryLoading = () => ({
  type: ActionTypes.STAFFSALARY_LOADING,
});
export const salaryFailed = (sal) => ({
  type: ActionTypes.STAFFSALARY_FAILED,
  payload: sal,
});

export const fetchStaffInDept = (id) => (dispatch) => {
  return fetch(baseUrl + "departments" + `/${id}`)
    .then(
      (response) => {
        if (response.ok) return response;
        else {
          var error = new Error(
            "ERROR :" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffIndept(response)))
    .catch((response) => dispatch(staffInDeptFailed(response)));
};
export const addStaffIndept = (val) => ({
  type: ActionTypes.ADD_STAFFINDEPT,
  payload: val,
});
export const staffInDeptFailed = (val) => ({
  type: ActionTypes.STAFFINDEPT_FAILED,
  payload: val,
});
export const staffInDeptLoad = () => ({
  type: ActionTypes.STAFFINDEPT_LOADING,
});
