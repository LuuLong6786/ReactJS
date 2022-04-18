import React, { useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { useSelector, useDispatch } from "react-redux";
import { fetchStaffInDept } from "../redux/ActionCreators";
import { useParams } from "react-router-dom";
import { STAFFS } from "../shared/staffs";

function RenderStaffInDept({ x }) {
  return (
    <Card>
      <CardImg width="100%" src={"/assets/images/alberto.png"} alt={x.image} />
      <p>{x.name}</p>
    </Card>
  );
}

function StaffeachDept() {
  const { deptId } = useParams(); //get params in url
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaffInDept(deptId)); //dispatch action in actioncreator with use dispatch
  }, []);

  const dept = useSelector((state) => state.staffInDept); // access store and get state saffInDept in store.

  const renderEachStaffInDept = dept.dept.map((ren) => {
    return (
      <div className="col-6 col-md-4 col-lg-2">
        <RenderStaffInDept x={ren} />
      </div>
    );
  });

  return <div className="row">{renderEachStaffInDept}</div>;
}

export default StaffeachDept;
