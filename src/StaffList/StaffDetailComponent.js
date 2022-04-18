/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  ModalHeader,
  Modal,
  ModalBody,
  Label,
  Row,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { deleteStaff } from "../redux/ActionCreators";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Fade, Stagger } from "react-animation-components";

function RenderStaffInfo({ x, y }) {
  if (x != null) {
    return (
      <Stagger in>
        <Fade in>
          <div className="row">
            <img
              className="col-12 col-md-4 col-lg-3"
              top
              src={"/assets/images/alberto.png"}
              alt={x.image}
              width="200px"
            />

            <div
              className="col-12 col-md-8 col-lg-9"
              style={{ textAlign: "left" }}
            >
              <h3>
                <b>Họ và tên:</b> {x.name}
              </h3>
              <p>
                <b>Ngày sinh:</b> {dateFormat((x.doB, "dd/mm/yyyy"))}
              </p>
              <p>
                <b>Ngày vào công ty:</b> {dateFormat(x.startDate, "dd/mm/yyyy")}
              </p>
              <p>
                <b>Phòng ban:</b> {y.name}
              </p>
              <p>
                <b>Số ngày nghỉ còn lại:</b> {x.annualLeave}
              </p>
              <p>
                <b>Số giờ đã làm thêm:</b> {x.overTime}{" "}
              </p>
            </div>
          </div>
        </Fade>
      </Stagger>
    );
  }
}
function StaffDetail(props) {
  //Get the /:staffId param from URL
  const { staffId } = useParams();

  const staffs = props.staffs.filter((staff) => staff.id == staffId)[0];

  const deptname = props.dept.filter(
    (dept) => dept.id === staffs.departmentId
  )[0];

  // console.log("DEPT " + JSON.stringify(deptname));
  // console.log("STAFFS " + JSON.stringify(staffs));

  const handleDeleteStaff = () => deleteStaff(staffId);

  const [isModalOpen, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!isModalOpen);
  };

  const handleUpdateInfoStaff = (values) => {
    props.updateStaff(
      staffId,
      values.name,
      values.doB,
      values.startDate,
      values.departmentId,
      values.salaryScale,
      values.annualLeave,
      values.overTime
    );
    toggleModal();
    alert("Successfully updated");
  };

  return (
    <div className="container">
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staffs.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div classname="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
        <RenderStaffInfo x={staffs} y={deptname} />
        <Button type="button" color="info" outline onClick={toggleModal}>
          Cập nhật thông tin
        </Button>
        <Button
          type="button"
          color="danger"
          outline
          onClick={handleDeleteStaff()}
          href="/nhanvien"
        >
          Xóa
        </Button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader>Chỉnh sửa nhân viên</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(val) => handleUpdateInfoStaff(val)}>
            <Row className="form-group">
              <Label md={3}>Tên</Label>
              <Col md={9}>
                <Control.text
                  className="form-control"
                  model=".name"
                  placeholder="Nhập tên đầy đủ"
                  name="name"
                  defaultValue={staffs.name}
                ></Control.text>
                {/* <Errors></Errors> */}
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
                  defaultValue={staffs.doB}
                ></Control>
                {/* <Errors></Errors> */}
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
                  defaultValue={staffs.startDate}
                ></Control>
                {/* <Errors></Errors> */}
              </Col>
            </Row>
            <Row className="form-group">
              <Label md={3}>Phòng Ban</Label>
              <Col md={9}>
                <Control.select
                  className="form-control"
                  model=".departmentId"
                  name="departmentId"
                  defaultValue={staffs.departmentId}
                >
                  <option value="" disabled selected>
                    Chọn phòng ban
                  </option>
                  <option value="Dept01">Sale</option>
                  <option value="Dept02">HR</option>
                  <option value="Dept03">Marketing</option>
                  <option value="Dept04">IT</option>
                  <option value="Dept05">Finance</option>
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
                  defaultValue={staffs.salaryScale}
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
                  defaultValue={staffs.annualLeave}
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
                  defaultValue={staffs.overTime}
                ></Control>
              </Col>
            </Row>
            <Button type="submit" color="primary" block>
              Chỉnh sửa
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default StaffDetail;
