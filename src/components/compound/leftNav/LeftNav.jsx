import React from "react";
import Category from "../../../data/category.json";
import { Link } from "react-router-dom";
import Style from "./styleLeftNav.css";

class LeftNav extends React.Component {
  constructor() {
    super();
  }

  leftNavMainCategory() {
    return Category.map((l1, key) => {
      if (l1.url === this.props.categoryType) {
        return l1.subCategory.map((l2, index) => {
          return (
            <li className="main-category">
              <Link to={l2.surl} className="main-cat-txt-deco">
                {l2.name}
                <span className="badge pull-right">{}</span>
              </Link>
              <ul className="leftnav-subcat sub-category">
                {l2.subCategory.map((l3, index) => {
                  return (
                    <li classNmae="sub-cat-list">
                      <Link to={l2.surl} className="sub-cat-txt-deco">
                        {l3}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        });
      }
    });
  }

  render() {
    return (
      <div className="col-md-3 sidenav">
        <div>
          <div className="panel panel-default sidebar-menu">
            <div className="panel-heading">
              <h3 className="panel-title">Categories</h3>
            </div>
            <div className="panel-body">
              <ul className="left-nav-cat">{this.leftNavMainCategory()}</ul>
            </div>
          </div>
          <div className="panel panel-default sidebar-menu">
            <div className="panel-heading">
              <h3 className="panel-title">
                Brands{" "}
                <a className="btn btn-xs btn-danger pull-right" href="#">
                  <i className="fa fa-times-circle" /> Clear
                </a>
              </h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />Armani (10)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />Versace (12)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />Carlo Bruni (15)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />Jack Honey (14)
                    </label>
                  </div>
                </div>
                <button className="btn btn-default btn-sm btn-primary">
                  <i className="fa fa-pencil" /> Apply
                </button>
              </form>
            </div>
          </div>
          <div className="panel panel-default sidebar-menu">
            <div className="panel-heading">
              <h3 className="panel-title">
                Colours{" "}
                <a className="btn btn-xs btn-danger pull-right" href="#">
                  <i className="fa fa-times-circle" /> Clear
                </a>
              </h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />{" "}
                      <span className="colour white" /> White (14)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> <span className="colour blue" />{" "}
                      Blue (10)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />{" "}
                      <span className="colour green" /> Green (20)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />{" "}
                      <span className="colour yellow" /> Yellow (13)
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> <span className="colour red" />{" "}
                      Red (10)
                    </label>
                  </div>
                </div>
                <button className="btn btn-default btn-sm btn-primary">
                  <i className="fa fa-pencil" /> Apply
                </button>
              </form>
            </div>
          </div>
          {/* *** MENUS AND FILTERS END *** */}
          <div className="banner">
            <a href="#">
              <img
                src="http://allfashion-outlet.com/wp-content/uploads/2017/07/gaming-glasses.jpg"
                alt="sales 2014"
                className="img-responsive"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
