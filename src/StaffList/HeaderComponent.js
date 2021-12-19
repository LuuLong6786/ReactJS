import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div style={{ background: "lightblue" }}>
        <Navbar expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" />
              <span></span> PHẦN MỀM QUẢN LÝ NHÂN SỰ V1.0
            </NavbarBrand>
            <div className="float-right">
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="float-right">
                  <NavItem>
                    <NavLink className="nav-link" to="/nhanvien">
                      <i class="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
                      Nhân Viên
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/phongban">
                      <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
                      Phòng Ban
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/bangluong">
                      <i class="fa fa-money" aria-hidden="true"></i> Bảng Lương
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
