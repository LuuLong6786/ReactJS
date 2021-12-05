import React from "react";
import { DEPARTMENTS } from "../shared/staffs";
import { Card } from "reactstrap";

function RenderStaffDepartment({ x }) {
  return (
    <Card className="p-5" style={{ background: "lightgray" }}>
      <h3>{x.name}</h3>
      <p>Số lượng nhân viên: {x.numberOfStaff}</p>
    </Card>
  );
}
function StaffDepartment() {
  const listDepartment = DEPARTMENTS.map((dept) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-3">
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
