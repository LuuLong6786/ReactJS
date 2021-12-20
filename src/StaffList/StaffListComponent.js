import React, { useState } from "react";
import {
  Card,
  CardImg,
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

//Tạo hàm hiển thị AllList nhân viên
function RenderAllStaffList({ x }) {
  return (
    <Card>
      {/* Khi click vào sẽ dẫn đến URL: */}
      <Link to={`/nhanvien/${x.id}`}>
        <CardImg width="100%" src={x.image} />
        <p>{x.name}</p>
      </Link>
    </Card>
  );
}

//Tạo FunctionComponent để render list nhân viên//
function StaffListComponent() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Lọc nhân viên theo tên
  const filteredStaff = STAFFS.filter(
    (staff) =>
      staff.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  // Sau khi lọc xong thì hiển thị list nhân viên lọc lên màn hình
  const stafflist = filteredStaff.map((name) => {
    return (
      <div className="col-6 col-md-4 col-lg-2">
        <RenderAllStaffList x={name} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <FormGroup row className="col-12 col-md-6">
          <h4>Nhân viên</h4>
          <button
            type="submit"
            value="submit"
            className="btn btn"
            onClick={() => setModalOpen(!isModalOpen)}
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
              onChange={(e) => setSearchValue(e.target.value)}
            ></Input>
          </Col>
        </FormGroup>
      </div>

      <Modal isOpen={isModalOpen} toggle={() => setModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!isModalOpen)}>
          Thêm nhân viên
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Tên</Label>
            <Input type="text" name="name"></Input>
            <FormFeedback>{}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Ngày sinh</Label>
            <Input type="text" name="doB"></Input>
            <FormFeedback>{}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Ngày vào công ty</Label>
            <Input type="text name" name="startDate"></Input>
            <FormFeedback>{}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Phòng Ban</Label>
            <Input type="text name" name="department"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Hệ số lương</Label>
            <Input type="text name" name="salary"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Số ngày nghỉ còn lại</Label>
            <Input type="text name" name="annualLeave"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Số ngày đã làm thêm</Label>
            <Input type="text name" name="overTime"></Input>
          </FormGroup>
          <Button type="submit" color="primary">
            Thêm
          </Button>
        </ModalBody>
      </Modal>
      <div className="row ">{stafflist}</div>
    </div>
  );
}

export default StaffListComponent;
