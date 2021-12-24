import React from "react";
import { Link } from "react-router-dom";
import Style from "./stylePLP.css";
import Breadcrumb from "../compound/breadcrumb/Breadcrumb";
import InfoBar from "../compound/infoBar/InfoBar";
import LeftNav from "../compound/leftNav/LeftNav";
import MenProducts from "../../../data/menProduct.json";
import WomenProducts from "../../../data/womenProduct.json";
import KidsProducts from "../../../data/kidsProduct.json";
import HomeDecorProducts from "../../../data/homeDecorProduct.json";

class PLP extends React.Component {
  constructor() {
    super();
    localStorage.setItem("tilesCount", 5);
  }

  renderPLPContent() {
    const currentCategory = this.props.match.params.id;
    const PLPCount = localStorage.getItem("tilesCount");
    var PLPData;
    switch (currentCategory) {
      case "men":
        PLPData = MenProducts.products;
        break;
      case "women":
        PLPData = WomenProducts.products;
        break;
      case "kids":
        PLPData = KidsProducts.products;
        break;
      case "homeDecor":
        PLPData = HomeDecorProducts.products;
        break;
      default:
        return null;
    }

    return PLPData.map((product, key) => {
      if (
        this.props.match.params.cat === PLPData[key].category ||
        this.props.match.params.cat === "all"
      ) {
        if (key < PLPCount || PLPCount === "All") {
          console.log(PLPCount);
          return this.renderProductTile(product, key);
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  }

  renderProductTile(product, key) {
    return (
      <div className="col-sm-3" key={key}>
        <div className="plp-tile">
          <div className="front">
            <Link to={"/product/" + product.id}>
              <img src={product.imgurl} alt="" className="img-responsive" />
            </Link>
          </div>
          <div className="text">
            <h5 className="product-name">
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </h5>
            <p className="price-plp">{product.price}</p>
            <p>
              <button className="plp-tiles-btn" href="product">
                View detail
              </button>
              <button
                className="plp-tiles-btn plp-btn-border"
                href="basket.html">
                <i className="fa fa-shopping-cart" />Add to cart
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <Breadcrumb />
        <div className="row content">
          <LeftNav categoryType={this.props.match.params.id} />
          <div className="col-sm-9">
            <InfoBar />
            <div className="row">{this.renderPLPContent()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PLP;
