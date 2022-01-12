import React, { Component } from "react";
import StaffListComponent from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import StaffDepartment from "./StaffDepartmentComponent";
import StaffIncomeComponent from "./StaffIncomeComponent";
import HomeComponent from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchStaffs,
  fetchDept,
  fetchStaffSalary,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDept: () => {
    dispatch(fetchDept());
  },
  fetchStaffSalary: () => {
    dispatch(fetchStaffSalary());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDept();
    this.props.fetchStaffSalary();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />

          <Route
            path="/nhanvien/"
            element={<StaffListComponent staffs={this.props.staffs.staffs} />}
          />

          <Route path="/nhanvien/:staffId" element={<StaffDetail />} />
          <Route
            path="/phongban/"
            element={<StaffDepartment dept={this.props.departments.dept} />}
          />
          <Route
            path="/bangluong/"
            element={<StaffIncomeComponent salary={this.props.salary.salary} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
