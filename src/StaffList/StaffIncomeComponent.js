import React from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

function RenderStaffIncome({ x }) {
  return (
    <Card>
      <h4>{x.name}</h4> <br />
      <p>Mã nhân viên: {x.id}</p>
      <p>Hệ số lương: {x.salaryScale}</p>
      <p>Số giờ làm thêm: {x.overTime}</p>
      <p style={{ border: "1px solid", background: "lightblue" }}>
        Lương: {parseInt(3000 * x.salaryScale + x.overTime * 200)}
      </p>
    </Card>
  );
}
function StaffIncomeComponent(props) {
  const StaffIncome = props.salary.map((name) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-3">
        <RenderStaffIncome x={name} />
      </div>
    );
  });
  return (
    <div className="container">
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/nhanvien">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{StaffIncome}</div>
    </div>
  );
}
export default StaffIncomeComponent; //
