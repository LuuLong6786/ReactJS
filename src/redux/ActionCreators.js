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
export const addNewStaff =
  (name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) =>
  (dispatch) => {
    const newStaff = {
      id: "",
      name: name,
      doB: doB,
      startDate: startDate,
      departmentId: departmentId,
      salaryScale: salaryScale,
      annualLeave: annualLeave,
      overTime: overTime,
      image: "/asset/images/alberto.png",
      salary: salaryScale * 3000000 + overTime * 200000,
    };
    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin", //gửi thông tin đăng nhập nếu URL yêu cầu có cùng nguồn gốc với tập lệnh gọi
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + " :" + response.statusText
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
      .catch((error) => {
        console.log("ERROR MESSAGE " + error.message);
        alert(
          "Your POST newstaff could not be posted\nError: " + error.message
        );
      });
  };

export const deleteStaff = (id) => (dispatch) => {
  return fetch(baseUrl + "staffs" + `/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        // console.log("RES " + JSON.stringify(response));
        if (response.ok) return response;
        else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
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
    .then(
      (response) => response.json(),
      alert("This staff had been deleted. Please reload the page.").then(
        (response) => dispatch(addStaffs(response))
      )
    )
    .catch((error) => {
      console.log("ERROR MESSAGE " + error.message);
      alert("Your DELETE Staff could not be deleted\nError: " + error.message);
    });
};

export const updateStaff =
  (
    id,
    name,
    doB,
    startDate,
    departmentId,
    salaryScale,
    annualLeave,
    overTime
  ) =>
  (dispatch) => {
    const updateStaff = {
      id: id,
      name: name,
      doB: doB,
      startDate: startDate,
      departmentId: departmentId,
      salaryScale: salaryScale,
      annualLeave: annualLeave,
      overTime: overTime,
      image: "/asset/images/alberto.png",
      salary: salaryScale * 3000000 + overTime * 200000,
    };
    // console.log("UPDATE " + JSON.stringify(updateStaff));

    return fetch(baseUrl + "staffs", {
      method: "PATCH",
      body: JSON.stringify(updateStaff),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin", //gửi thông tin đăng nhập nếu URL yêu cầu có cùng nguồn gốc với tập lệnh gọi
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + " :" + response.statusText
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
      .catch((error) => {
        console.log("ERROR MESSAGE " + error.message);
        alert("Your Update could not be updated\nError: " + error.message);
      });
  };
