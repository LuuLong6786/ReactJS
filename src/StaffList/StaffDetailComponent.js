import React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staffs";
import { useParams } from "react-router-dom";

import dateFormat from "dateformat";

function RenderStaffInfo({ x }) {
  if (x != null)
    return (
      <div className="row">
        <img
          className="col-12 col-md-4 col-lg-3"
          top
          src={x.image}
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
            <b>Phòng ban:</b> {x.department.name}
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
function StaffDetail() {
  //The useParams hook returns an object of key/value pairs of the dynamic params
  //from the current URL that were matched by the <Route path>.
  //Child routes inherit all params from their parent routes.

  //Get the /:staffId param from URL
  const { staffId } = useParams();
  //Truyền dữ liệu STAFFS vào component và lọc lấy dữ liệu
  //có id của nhân viên trùng với /:staffId

  const staff = STAFFS.filter((dish) => dish.id === parseInt(staffId, 10))[0];
  console.log(staff);

  return (
    <div className="container">
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div classname="row" style={{ marginTop: "10%", marginBottom: "10%" }}>
        <RenderStaffInfo x={staff} />
      </div>
    </div>
  );
}
export default StaffDetail;
