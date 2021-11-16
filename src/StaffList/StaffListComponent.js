import React, { Component } from "react";
import { CardBlock } from "reactstrap";
import dateFormat, { masks } from "dateformat";

class StaffListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: null,
    };
  }

  onStaffSelect(name) {
    this.setState({ select: name });
  }
  renderInfoStaff(name) {
    if (name != null) {
      return (
        <div>
          <h3>Họ và tên: {name.name}</h3>
          <p>Ngày sinh: {dateFormat((name.doB, "dd/mm/yyyy"))}</p>
          <p>Ngày vào công ty: {dateFormat(name.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {name.department.name}</p>
          <p>Số ngày nghỉ còn lại: {name.annualLeave}</p>
          <p>Số ngày đã làm thêm: {name.overTime} </p>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    const staffListName = this.props.staff.map((name) => {
      return (
        <div
          className="col-12 col-md-6 col-lg-4"
          onClick={() => this.onStaffSelect(name)}
        >
          <CardBlock>{name.name} </CardBlock>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staffListName}</div>
        <div> Bấm vào tên nhân viên để xem thông tin.</div>
        <div>{this.renderInfoStaff(this.state.select)}</div>
      </div>
    );
  }
}

export default StaffListComponent;
