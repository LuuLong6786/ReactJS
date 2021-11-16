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
        <div
          style={{
            border: "black solid 1px",
            textAlign: "center",
            background: "lightblue",
            color: "darkblue",
          }}
        >
          <h3>
            <b>Họ và tên:</b> {name.name}
          </h3>
          <p>
            <b>Ngày sinh:</b> {dateFormat((name.doB, "dd/mm/yyyy"))}
          </p>
          <p>
            <b>Ngày vào công ty:</b> {dateFormat(name.startDate, "dd/mm/yyyy")}
          </p>
          <p>
            <b>Phòng ban:</b> {name.department.name}
          </p>
          <p>
            <b>Số ngày nghỉ còn lại:</b> {name.annualLeave}
          </p>
          <p>
            <b>Số ngày đã làm thêm:</b> {name.overTime}{" "}
          </p>
        </div>
      );
    } else return <div></div>;
  }
  MouseOver(event) {
    event.target.style.background = "gray";
    event.target.style.fontSize = "30px";
  }
  MouseOut(event) {
    event.target.style.background = "lightblue";
    event.target.style.fontSize = "";
  }

  render() {
    const staffListName = this.props.staff.map((name) => {
      return (
        <div
          className="col-12 col-md-5 col-lg-4 p-1"
          onClick={() => this.onStaffSelect(name)}
          onMouseOver={this.MouseOver}
          onMouseOut={this.MouseOut}
        >
          <CardBlock style={{ background: "lightblue", color: "blue" }}>
            {name.name}
          </CardBlock>
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
