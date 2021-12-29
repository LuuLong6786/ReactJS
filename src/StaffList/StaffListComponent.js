import React, { Component } from "react";
import {
  Card,
  CardImg,
  Form,
  Col,
  Input,
  FormGroup,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Label,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

class StaffListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      searchValue: "",
      id: parseInt([STAFFS.length]),
      name: "",
      doB: "",
      startDate: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
      salary: "",
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.validate = this.validate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleAddNewStaff = this.handleAddNewStaff.bind(this);
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  //Tạo method get value từ input của search, sau đó cập nhật lại state ban đầu
  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
  }
  handleBlur = (field) => (e) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };
  //Tạo method get value của input và thay đổi state/ dựa trên name của input (gửi giá trị của thuộc tính trong form về server)
  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }
  handleAddNewStaff(e) {
    const newStaff = {
      id: parseInt(this.state.id + 1),
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: { name: this.state.department },
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salaryScale * 3000000 + this.state.overTime * 200000,
      image: this.state.image,
    };
    this.toggleModal();
    return STAFFS.push(newStaff);
  }
  //Tạo method validate với chức năng render
  validate(name, doB, startDate) {
    const errors = { name: "", doB: "", startDate: "" };
    //Validate name//
    if (this.state.touched.name && name.length < 2)
      errors.name = "Yêu cầu nhập nhiều hơn 2 ký tự";
    else if (this.state.touched.name && name.length > 30)
      errors.name = "Yêu cầu nhập ít hơn 30 ký tự";
    //Validate doB//
    if (this.state.touched.doB && doB === "") errors.doB = "Yêu cầu nhập";
    else if (new Date(doB) > new Date())
      errors.doB = "Nhập lại năm sinh cho đúng";
    //Validate startDate
    if (this.state.touched.startDate && startDate === "")
      errors.startDate = "Yêu cầu nhập";
    else if (new Date(startDate) > new Date())
      errors.startDate = "Thông tin nhập vào chưa hợp lệ";

    return errors;
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
    const filterStaff = STAFFS.filter((staff) => {
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
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate
    );
    return (
      <div className="container">
        <div className="row">
          <FormGroup row className="col-12 col-md-6">
            <h4>Nhân viên</h4>
            <button
              type="submit"
              value="submit"
              className="btn btn"
              onClick={this.toggleModal}
            >
              <i class="fa fa-plus-square-o fa-2x" aria-hidden="true"></i>
            </button>
          </FormGroup>
          <FormGroup row className="col-12 col-md-6">
            <Col>
              <Input
                label="Search Name"
                icon="search"
                placeholder="Search"
                onChange={this.handleSearch}
              ></Input>
            </Col>
          </FormGroup>
        </div>
        {/* Tạo modal */}

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Tên</Label>
                <Input
                  placeholder="Nhập tên đầy đủ"
                  type="text"
                  name="name"
                  onBlur={this.handleBlur("name")}
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  valid={errors.name}
                  invalid={errors.name !== ""}
                ></Input>
                <FormFeedback>{errors.name}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Ngày sinh</Label>
                <Input
                  type="date"
                  name="doB"
                  value={this.state.doB}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur("doB")}
                  valid={errors.doB}
                  invalid={errors.doB !== ""}
                ></Input>
                <FormFeedback>{errors.doB}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Ngày vào công ty</Label>
                <Input
                  type="date"
                  name="startDate"
                  value={this.state.startDate}
                  onChange={this.handleInputChange}
                  onBlur={this.handleBlur("startDate")}
                  valid={errors.startDate}
                  invalid={errors.startDate !== ""}
                ></Input>
                <FormFeedback>{errors.startDate}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Phòng Ban</Label>
                <Input
                  type="select"
                  name="department"
                  onChange={this.handleInputChange}
                >
                  <option value="" disabled selected>
                    Chọn phòng ban
                  </option>
                  <option value={DEPARTMENTS[0].name}>Sale</option>
                  <option value={DEPARTMENTS[1].name}>HR</option>
                  <option value={DEPARTMENTS[2].name}>Marketing</option>
                  <option value={DEPARTMENTS[3].name}>IT</option>
                  <option value={DEPARTMENTS[4].name}>Finance</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Hệ số lương</Label>
                <Input
                  type="number"
                  name="salary"
                  onChange={this.handleInputChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Số ngày nghỉ còn lại</Label>
                <Input
                  type="number"
                  name="annualLeave"
                  onChange={this.handleInputChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Số ngày đã làm thêm</Label>
                <Input
                  type="number"
                  name="overTime"
                  onChange={this.handleInputChange}
                ></Input>
              </FormGroup>

              <Button
                type="button"
                color="primary"
                onClick={this.handleAddNewStaff}
              >
                Thêm
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <div className="row ">{stafflist}</div>
      </div>
    );
  }
}

export default StaffListComponent;
