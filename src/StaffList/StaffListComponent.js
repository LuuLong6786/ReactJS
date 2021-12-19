import React, { useState } from "react";
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
  const stafflist = STAFFS.map((name) => {
    return (
      <div className="col-6 col-md-4 col-lg-2">
        <RenderAllStaffList x={name} />
      </div>
    );
  });
  const [isModalOpen, setModal] = useState(false);

  return (
    <div className="container">
      <Form inline>
        <FormGroup row className="col-12 col-md-6">
          <h4>Nhân viên</h4>
          <button
            type="submit"
            value="submit"
            className="btn btn"
            onClick={() => setModal(!isModalOpen)}
          >
            <i class="fa fa-plus-square-o fa-2x" aria-hidden="true"></i>
          </button>
        </FormGroup>
        <FormGroup row className="col-12 col-md-6">
          <Col>
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            ></Input>
          </Col>
          <Button type="submit" color="primary">
            Search
          </Button>
        </FormGroup>
      </Form>
      <Modal isOpen={isModalOpen} toggle={() => setModal(!isModalOpen)}>
        <ModalHeader toggle={() => setModal(!isModalOpen)}>
          Thêm nhân viên
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Ngày sinh</Label>
            <Input type="text" name="doB"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Ngày vào công ty</Label>
            <Input type="text name" name="startDate"></Input>
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
