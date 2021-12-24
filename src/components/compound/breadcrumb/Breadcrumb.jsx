import React from "react";
import Style from "./styleBreadcrumb.css";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="col-md-12 padding-breadcrumb">
        <ul className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>Ladies</li>
        </ul>
      </div>
    );
  }
}

export default Breadcrumb;
