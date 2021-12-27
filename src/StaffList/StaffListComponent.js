/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import {
  Card,
  CardImg,
  Col,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { connect } from "react-redux";

//Liên kết với store
const mapStateToProps = (state) => {
  return {
    staff: state.staff,
    department: state.department,
  };
};
const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;
const dateValid = (val) => !val || new Date(val) < new Date();

class StaffListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      searchValue: "",
      id: [this.props.staff.length], //=STAFFS.length
      name: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddNewStaff = this.handleAddNewStaff.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  //Tạo method get value từ input của search, sau đó cập nhật lại state ban đầu
  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
  }
  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ ...this.state, [name]: value });
  }

  handleAddNewStaff(e) {
    const newStaff = {
      id: this.state.id,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,

      department: {
        id: `Dept${this.state.id}`,
        name: this.state.department,
        numberOfStaff: this.state.id,
      },
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salaryScale * 3000000 + this.state.overTime * 200000,
      image: this.state.image,
    };
    this.toggleModal();

    return this.props.staff.push(newStaff);
    // localStorage.setItem(newStaff, JSON.stringify(this.props.staff))
  }

  render() {
    //Render 1 staff cụ thể
    const RenderAllStaffList = ({ x }) => {
      return (
        <Card>
          {/* Khi click vào sẽ dẫn đến URL: */}
          <Link to={`/nhanvien/${x.id}`}>
            <CardImg width="100%" src={x.image} />
            <p>{x.name}</p>
          </Link>
        </Card>
      );
    };
    //Lấy data từ searchInput ->lọc qua từng mảng
    const filterStaff = this.props.staff.filter((staff) => {
      return (
        staff.name
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1
      );
    });

    const stafflist = filterStaff.map((name) => {
      return (
        <div className="col-6 col-md-4 col-lg-2">
          <RenderAllStaffList x={name} />
        </div>
      );
    });

    return (
      <div className="container">
        <Row className="form-group">
          <Row className=" col-12 col-md-6">
            <h4>Nhân viên</h4>
            <button
              type="button"
              className="btn btn"
              onClick={this.toggleModal}
            >
              <i class="fa fa-plus-square-o fa-2x" aria-hidden="true"></i>
            </button>
          </Row>

          <Col className="col-12 col-md-6">
            <Control.text
              model=".search"
              label="Search Name"
              placeholder="Search"
              onChange={this.handleSearch}
              className="form-control"
            ></Control.text>
          </Col>
        </Row>

        {/* Tạo modal */}

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm>
              <Row className="form-group">
                <Label md={3}>Tên</Label>
                <Col md={9}>
                  <Control.text
                    className="form-control"
                    model=".name"
                    placeholder="Nhập tên đầy đủ"
                    name="name"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(30),
                    }}
                    onChange={this.handleInputChange}
                  ></Control.text>
                  <Errors
                    className="text-danger"
                    model=".name"
                    show={true}
                    messages={{
                      required: "Yêu cầu nhập",
                      minLength: "Yêu cầu nhập nhiều hơn 2 ký tự",
                      maxLength: "Yêu cầu nhập ít hơn 30 ký tự",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={3}>Ngày sinh</Label>
                <Col md={9}>
                  <Control
                    className="form-control"
                    model=".doB"
                    type="date"
                    name="doB"
                    validators={{ required, dateValid }}
                    onChange={this.handleInputChange}
                  ></Control>
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show={true}
                    messages={{
                      required: "Yêu cầu nhập",
                      dateValid: "Yêu cầu nhập thời gian nhỏ hơn hiện tại",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={3}>Ngày vào công ty</Label>
                <Col md={9}>
                  <Control
                    className="form-control"
                    model=".startDate"
                    type="date"
                    name="startDate"
                    validators={{ required, dateValid }}
                    onChange={this.handleInputChange}
                  ></Control>
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show={true}
                    messages={{
                      required: "Yêu cầu nhập",
                      dateValid: "Yêu cầu nhập thời gian nhỏ hơn hiện tại",
                    }}
                  ></Errors>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={3}>Phòng Ban</Label>
                <Col md={9}>
                  <Control.select
                    className="form-control"
                    model=".department"
                    name="department"
                    onChange={this.handleInputChange}
                  >
                    <option value="" disabled selected>
                      Chọn phòng ban
                    </option>
                    <option value="Sale">Sale</option>
                    <option value="HR">HR</option>
                    <option value="Marketing">Marketing</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={3}>Hệ số lương</Label>
                <Col md={9}>
                  <Control
                    className="form-control"
                    model=".salaryScale"
                    type="number"
                    name="salaryScale"
                    onChange={this.handleInputChange}
                  ></Control>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={3}>Số ngày nghỉ còn lại</Label>
                <Col md={9}>
                  <Control
                    className="form-control"
                    model=".annualLeave"
                    type="number"
                    name="annualLeave"
                    onChange={this.handleInputChange}
                  ></Control>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={3}>Số ngày đã làm thêm</Label>
                <Col md={9}>
                  <Control
                    className="form-control"
                    model=".overTime"
                    type="number"
                    name="overTime"
                    onChange={this.handleInputChange}
                  ></Control>
                </Col>
              </Row>
              <Button
                type="button"
                onClick={this.handleAddNewStaff}
                color="primary"
                block
              >
                Thêm
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>

        <div className="row ">{stafflist}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StaffListComponent); //connect data ở store với componnent
