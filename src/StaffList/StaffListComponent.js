import React, { Component } from "react";
import { CardBlock } from "reactstrap";

class StaffListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: null,
    };
  }

  //   onStaffSelect(name) {
  //     this.setState({ select: name });
  //   }

  render() {
    const staffListName = this.props.staff.map((name) => {
      return (
        <div className="col-12 col-md-6 col-lg-4">
          <CardBlock>{name.name} </CardBlock>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staffListName}</div>
        <div> Bấm vào tên nhân viên để xem thông tin.</div>
      </div>
    );
  }
}

export default StaffListComponent;
