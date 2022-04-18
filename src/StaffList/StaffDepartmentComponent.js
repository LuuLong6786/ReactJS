import React from "react";
import { DEPARTMENTS } from "../shared/staffs";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaffDepartment({ x }) {
  return (
    <Card className="p-5" style={{ background: "lightgray" }}>
      <Link to={`/phongban/${x.id}`}>
        <h3>{x.name}</h3>
        <p>Số lượng nhân viên: {x.numberOfStaff}</p>
      </Link>
    </Card>
  );
}
function StaffDepartment(props) {
  const listDepartment = props.dept.map((dept) => {
    return (
      <div key={dept.id} className="col-12 col-md-6 col-lg-4 p-3">
        <RenderStaffDepartment x={dept} />
      </div>
    );
  });
  return (
    <div
      className="container"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="row">{listDepartment}</div>
    </div>
  );
}

export default StaffDepartment;
