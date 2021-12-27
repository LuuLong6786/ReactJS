import React, { Component } from "react";
import StaffListComponent from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import StaffDepartment from "./StaffDepartmentComponent";
import StaffIncomeComponent from "./StaffIncomeComponent";
import HomeComponent from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent />} />

          <Route path="/nhanvien/" element={<StaffListComponent />} />
          <Route path="/nhanvien/:staffId" element={<StaffDetail />} />
          <Route path="/phongban/" element={<StaffDepartment />} />
          <Route path="/bangluong/" element={<StaffIncomeComponent />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
