import React from "react";
import Style from "./styleError.css";

class Error extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!<br />
            </div>
            <div className="error-actions">
              <a
                href="<?php echo Yii::app()->request->baseUrl; ?>"
                className="btn btn-primary">
                <i className="icon-home icon-white" /> Take Me Home{" "}
              </a>
              <a href="mailto:me@null-byte.info" className="btn btn-default">
                <i className="icon-envelope" /> Contact Support{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
