import React from "react";
import Style from "./styleMegaMenu.css";
import { Link } from "react-router-dom";

class MainCategory extends React.Component {
  constructor() {
    super();
  }
  renderSubCategory(l2, catUrl) {
    const l2SubCat = l2.subCategory;
    if (l2SubCat) {
      return (
        <ul>
          {l2SubCat.map((l3, key) => (
            <li role="menuitem" key={key}>
              <Link to={"/shop/" + catUrl + "/" + l2.surl}>{l3}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }
  render() {
    const cat = this.props.item;
    return (
      <li role="menuitem" key={this.props.key}>
        <Link className="cat-nav" to={"/shop/" + cat.url + "/all"}>
          {cat.categoryName}
        </Link>
        <div className="mega-menu" aria-hidden="true" role="menu">
          {cat.subCategory.map((l2, key) => (
            <div className="nav-column" key={key}>
              <Link to={"/shop/" + cat.url + "/" + l2.surl}>
                <h4>{l2.name}</h4>
              </Link>
              {this.renderSubCategory(l2, cat.url)}
            </div>
          ))}
        </div>
      </li>
    );
  }
}

export default MainCategory;
