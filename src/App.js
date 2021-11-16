import React, { Component } from "react";
import { STAFFS } from "./shared/staffs";
import { DEPARTMENTS } from "./shared/staffs";
import StaffListComponent from "./StaffList/StaffListComponent";
import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: STAFFS,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffListComponent staff={this.state.staff} />
      </div>
    );
  }
}

export default App;
