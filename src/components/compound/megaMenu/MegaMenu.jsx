import React from "react";
import Style from "./styleMegaMenu.css";
import Category from "../../../data/category.json";
import MainCategory from "./MainCategory";
import { Link } from "react-router-dom";

class MegaMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="menu-wrapper" role="navigation">
        <ul className="nav col-md-1" role="menubar">
          <Link to="/homePage">
            <img
              src="http://www.freepngimg.com/download/batman/3-2-batman-logo-png.png"
              alt=""
              className="img-responsive logo"
            />
          </Link>
        </ul>
        <ul className="nav col-md-7" role="menubar">
          {Category.map((l1, key) => {
            return <MainCategory key={key} item={l1} index={key} />;
          })}
        </ul>
        <ul className="nav col-md-4">
          <li role="menuitem" className="nav-search">
            <form className="navbar-form search-box">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
              <button type="submit" className="btn btn-default">
                <i className="glyphicon glyphicon-search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default MegaMenu;
