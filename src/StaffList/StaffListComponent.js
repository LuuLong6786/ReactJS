import React from "react";
import { Card, CardImg } from "reactstrap";
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

// MouseOver(event) {
//   event.target.style.background = "gray";
//   event.target.style.fontSize = "30px";
// }
// MouseOut(event) {
//   event.target.style.background = "lightblue";
//   event.target.style.fontSize = "";
// }

//Tạo FunctionComponent để render list nhân viên//
function StaffListComponent() {
  const stafflist = STAFFS.map((name) => {
    return (
      <div className="col-6 col-md-4 col-lg-2">
        <RenderAllStaffList x={name} />
      </div>
    );
  });
  return (
    <div className="container ">
      <div className="row ">{stafflist}</div>
    </div>
  );
}
// render() {
//   const staffListName = this.props.staff.map((name) => {
//     return (
//       <div
//         className="col-6 col-md-4 col-lg-2"
//         onClick={() => this.onStaffSelect(name)}
//         // onMouseOver={this.MouseOver}
//         // onMouseOut={this.MouseOut}
//       >
//         <img src={name.image} alt={name.image} />
//         <p>{name.name}</p>
//       </div>
//     );
//   });

export default StaffListComponent;
