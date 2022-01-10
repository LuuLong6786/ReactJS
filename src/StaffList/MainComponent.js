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
import { fetchStaffs } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    // department: state.department,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />

          <Route
            path="/nhanvien/"
            element={<StaffListComponent staffs={this.props.staffs} />}
          />
          <Route path="/nhanvien/:staffId" element={<StaffDetail />} />
          <Route path="/phongban/" element={<StaffDepartment />} />
          <Route path="/bangluong/" element={<StaffIncomeComponent />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
