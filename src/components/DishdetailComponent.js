import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}
function RenderComments({ comments }) {
  if (comments != null)
    return (
      <div>
        <h4>{"Comments"}</h4>
        <div>
          {comments.comments.map((com) => (
            <div>
              <p>{com.comment}</p>
              <p>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(com.date)))}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
          {/* {this.renderDish(this.props.dish)} */}
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.dish} />
          {/* {this.renderComments(this.props.dish)} */}
        </div>
      </div>
    </div>
  );
};
export default DishDetail;
