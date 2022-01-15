import React, { useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { useSelector, useDispatch } from "react-redux";
import { fetchStaffInDept } from "../redux/ActionCreators";
import { useParams } from "react-router-dom";

function RenderStaffInDept({ x }) {
  return (
    <Card>
      <CardImg width="100%" src={baseUrl + x.image} alt={x.image} />
      <p>{x.name}</p>
    </Card>
  );
}

function StaffeachDept(props) {
  const { deptId } = useParams(); //get params in url

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStaffInDept(deptId)); //dispatch action in actioncreator with use diapatch
  }, []);

  const dept = useSelector((state) => state.staffInDept); // access store and get state saffInDept in store ==> console.log to see what in that.

  console.log("TEST " + JSON.stringify(dept.dept));

  const renderEachStaffInDept = dept.dept.map((ren) => {
    return (
      <div>
        <RenderStaffInDept x={ren} />
      </div>
    );
  });

  return <div>{renderEachStaffInDept}</div>;
}

export default StaffeachDept;
