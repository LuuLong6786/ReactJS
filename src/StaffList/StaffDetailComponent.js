/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { deleteStaff } from "../redux/ActionCreators";
import { Button } from "reactstrap";

function RenderStaffInfo({ x, y }) {
  if (x != null) {
    return (
      <div className="row">
        <img
          className="col-12 col-md-4 col-lg-3"
          top
          src={"/assets/images/alberto.png"}
          alt={x.image}
          width="200px"
        />
        <div className="col-12 col-md-8 col-lg-9" style={{ textAlign: "left" }}>
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
            <b>Phòng ban:</b> {x.departmentId}
          </p>
          <p>
            <b>Số ngày nghỉ còn lại:</b> {x.annualLeave}
          </p>
          <p>
            <b>Số giờ đã làm thêm:</b> {x.overTime}{" "}
          </p>
        </div>
      </div>
    );
  }
}
function StaffDetail(props) {
  //Get the /:staffId param from URL
  const { staffId } = useParams();

  const staffs = props.staffs.filter((staff) => staff.id == staffId)[0];

  // console.log("STAFFS " + JSON.stringify(staffs));
  const handleDeleteStaff = () => deleteStaff(staffId);
  const handleUpdateInfoStaff = () => {};

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
        <RenderStaffInfo x={staffs} />
        <Button
          type="buton"
          color="info"
          outline
          onClick={handleUpdateInfoStaff()}
        >
          Cập nhật thông tin
        </Button>
        <Button
          type="button"
          color="danger"
          outline
          onClick={handleDeleteStaff()}
        >
          Xóa
        </Button>
      </div>
    </div>
  );
}
export default StaffDetail;
