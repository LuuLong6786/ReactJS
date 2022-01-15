import React, { useEffect } from "react";
import {
  Card,
  CardImg,
} from "E:/DEV/Môn 3 - Frontend nâng cao/assignment_4/node_modules/reactstrap/dist/reactstrap.cjs";
import { baseUrl } from "../shared/baseUrl";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RenderStaffInDept({ x }) {
  return (
    <Card>
      <CardImg width="100%" src={baseUrl + x.image} alt={x.image} />
      <p>{x.name}</p>
    </Card>
  );
}

function StaffeachDept(props) {
  const deptEach = props.dept;

  const deptId = useParams(); //Gán depId ở Link (StaffDepartmentComponents)
  const staffs = useSelector((state) => console.log("state", state));
  console.log("TRY IT ", staffs);
  //   useEffect(() => {
  //     props.fetchStaffInDept(1);
  //   });
  const renderEachStaffInDept = deptEach.map((ren) => {
    return (
      <div>
        <RenderStaffInDept x={ren} />
      </div>
    );
  });

  return <div>{renderEachStaffInDept}</div>;
}

export default StaffeachDept;
