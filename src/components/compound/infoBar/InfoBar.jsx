import React from "react";
import Style from "./styleInfoBar.css";
import PLP from "../../PLP/PLP";

class InfoBar extends React.Component {
  constructor() {
    super();
    this.tileCountClickHandler = this.tileCountClickHandler.bind(this);
  }
  tileCountClickHandler(e) {
    if (typeof Storage !== "undefined") {
      // Store
      localStorage.setItem("tilesCount", e.target.textContent);
    }
  }

  render() {
    return (
      <div className="box info-bar">
        <div className="row">
          <div className="col-sm-12 col-md-4 products-showing">
            Showing <strong>12</strong> of <strong>25</strong> products
          </div>
          <div className="col-sm-12 col-md-8  products-number-sort">
            <div className="row">
              <form className="form-inline">
                <div className="col-md-6 col-sm-6">
                  <div className="products-number">
                    <strong>Show</strong>{" "}
                    <a
                      href="#"
                      className="btn btn-default btn-sm btn-primary"
                      onClick={this.tileCountClickHandler}>
                      5
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-default btn-sm"
                      onClick={this.tileCountClickHandler}>
                      10
                    </a>{" "}
                    <a
                      href="#"
                      className="btn btn-default btn-sm"
                      onClick={this.tileCountClickHandler}>
                      All
                    </a>{" "}
                    products
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="products-sort-by">
                    <strong>Sort by</strong>
                    <select
                      name="sort-by"
                      className="form-control info-sort-by">
                      <option>Price</option>
                      <option>Name</option>
                      <option>Sales first</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBar;
