import React from "react";
import Style from "./stylePDP.css";

class PDP extends React.Component {
  constructor() {
    super();

    this.thumbClickHandler = this.thumbClickHandler.bind(this);
    this.defaultImage =
      "https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/1571701/2016/9/30/11475231592763-Harpa-Women-Tops-7391475231592517-1.jpg";
    this.state = { mainImage: this.defaultImage };
  }

  thumbClickHandler(e) {
    if (e.target.src) {
      this.setState({ mainImage: e.target.src });
    }
  }

  render() {
    return (
      <div className="col-sm-12 thumb-container pdp-bottom-border">
        <div className="col-sm-1 thumb">
          <ul className="thumb-list">
            <li className="thumb" onClick={this.thumbClickHandler}>
              <img
                src="https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/1571701/2016/9/30/11475231592763-Harpa-Women-Tops-7391475231592517-1.jpg"
                alt=""
                className="img-responsive"
              />
            </li>
            <li className="thumb" onClick={this.thumbClickHandler}>
              <img
                src="https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/1571701/2016/9/30/11475231592745-Harpa-Women-Tops-7391475231592517-2.jpg"
                alt=""
                className="img-responsive"
              />
            </li>

            <li className="thumb" onClick={this.thumbClickHandler}>
              <img
                src="https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/1571701/2016/9/30/11475231592720-Harpa-Women-Tops-7391475231592517-3.jpg"
                alt=""
                className="img-responsive"
              />
            </li>
            <li className="thumb" onClick={this.thumbClickHandler}>
              <img
                src="https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/1571701/2016/9/30/11475231592692-Harpa-Women-Tops-7391475231592517-4.jpg"
                alt=""
                className="img-responsive"
              />
            </li>
            <li className="thumb" onClick={this.thumbClickHandler}>
              <img
                src="https://assets.myntassets.com/h_640,q_90,w_480/v1/assets/images/1571701/2016/9/30/11475231592667-Harpa-Women-Tops-7391475231592517-5.jpg"
                alt=""
                className="img-responsive"
              />
            </li>
          </ul>
        </div>

        <div className="col-sm-4">
          <div id="mainImage">
            <img src={this.state.mainImage} alt="" className="img-responsive" />
          </div>
          <div className="ribbon sale">
            <div className="theribbon">SALE</div>
            <div className="ribbon-background" />
          </div>
          {/* /.ribbon */}
          <div className="ribbon new">
            <div className="theribbon">NEW</div>
            <div className="ribbon-background" />
          </div>
          {/* /.ribbon */}
        </div>
        <div className="col-sm-7">
          <div className="box pdp-box">
            <div className="pdp-price-info pdp-bottom-border">
              <h1 className="pdp-title">
                Harpa Women White Printed Regular Cold Shoulder Top
              </h1>
              <p className="pdp-discount-container">
                <span className="pdp-discount">(50% OFF)</span>
              </p>
              <p className="pdp-selling-price">
                <strong className="pdp-price">Rs. 499</strong>
                <span className="pdp-vatInfo">
                  Additional tax may apply; charged at checkout
                </span>
              </p>
            </div>

            <div className="pdp-offers-container pdp-bottom-border">
              <div>
                <div className="pdp-offers-offerBlock">
                  <div className="pdp-offers-offer">
                    <div className="pdp-offers-offerColumn">
                      <span className="pdp-offers-offerTitle">
                        <b>20% Supercash on MobiKwik.</b>
                      </span>
                      <span className="pdp-offers-offerDesc">
                        Get 20% Supercash upto Rs. 500 on MobiKwik payments. TCA
                      </span>
                    </div>
                    <div className="pdp-offers-offerColumn">
                      <a
                        className="pdp-offers-showOfferLink"
                        href="https://www.myntra.com/tac">
                        View
                        <span className="myntraweb-sprite pdp-offers-arrowRightBold sprites-arrowRightBold" />
                      </a>
                    </div>
                  </div>
                </div>
                <span className="pdp-offers-moreOffersButton">
                  Click for best price
                </span>
              </div>
            </div>
            <div
              className="size-buttons-size-container"
              id="sizeButtonsContainer">
              <div className="size-buttons-size-header">
                <h4 className="size-buttons-select-size">SELECT SIZE</h4>
              </div>
              <div className="size-buttons-size-buttons">
                <button className="size-buttons-size-button size-buttons-size-button-default">
                  <span className="size-buttons-size-strike-hide" />
                  <p className="size-buttons-unified-size">S</p>
                </button>
                <button className="size-buttons-size-button size-buttons-size-button-default">
                  <span className="size-buttons-size-strike-hide" />
                  <p className="size-buttons-unified-size">M</p>
                </button>
                <button className="size-buttons-size-button size-buttons-size-button-default">
                  <span className="size-buttons-size-strike-hide" />
                  <p className="size-buttons-unified-size">L</p>
                </button>
                <button className="size-buttons-size-button size-buttons-size-button-default">
                  <span className="size-buttons-size-strike-hide" />
                  <p className="size-buttons-unified-size">XL</p>
                </button>
              </div>
              <p className="pdp-buttons">
                <a href="basket.html" className="btn btn-default">
                  <i className="fa fa-heart" /> Add to wishlist
                </a>
                <a
                  href="basket.html"
                  className="btn btn-primary pdp-add-to-cart">
                  <i className="fa fa-shopping-cart" /> Add to cart
                </a>
              </p>
              <div className="pdp-sizeChartInfo pdp-bottom-border">
                <div className="pdp-size-chart-description">
                  The model (height 5'8" and chest 33") is wearing a size S
                </div>
              </div>
              <div className="pdp-productDescriptors">
                <div className="pdp-productDescriptorsContainer">
                  <div>
                    <h4 className="pdp-product-description-title">
                      Product Details
                    </h4>
                    <p className="pdp-product-description-content">
                      White printed woven regular fit top, has a round neck,
                      three-quarter sleeves
                    </p>
                  </div>
                  <div className="pdp-sizeFitDesc">
                    <h4 className="pdp-completeTheLook pdp-product-description-title">
                      Complete The Look
                    </h4>
                    <p className="meta-info">
                      Opt for this in-season three-quarter sleeve top by Harpa
                      when you need a fashion upgrade. A fun night out with your
                      friends is as easy as putting this white piece with a
                      trendy trainer and darker denim jean.
                    </p>
                  </div>
                  <div className="pdp-sizeFitDesc">
                    <h4 className="pdp-sizeFitDescTitle pdp-product-description-title">
                      Size &amp; Fit
                    </h4>
                    <p className="pdp-sizeFitDescContent pdp-product-description-content">
                      The model (height 5'8" and chest 33") is wearing a size S
                    </p>
                  </div>
                  <div>
                    <h4 className="pdp-product-description-title">
                      Material &amp; Care
                    </h4>
                    <p className="pdp-product-description-content">
                      Polyester <br /> Hand-wash
                    </p>
                  </div>
                </div>
              </div>
              <div className="pincode-serviceability">
                <button className="pincode-button">
                  Check Delivery Options
                </button>
              </div>
              <div className="meta-container">
                <p className="meta-taxInfo meta-info">
                  Tax: Applicable tax on the basis of exact location &amp;
                  discount will be charged at the time of checkout
                </p>
                <p className="meta-info">100% Original Products</p>
                <p className="meta-info">
                  {/* react-text: 179 */}Free Delivery on order above Rs.{" "}
                  {/* /react-text */}
                  {/* react-text: 180 */}49{/* /react-text */}
                </p>
                <p className="meta-info">
                  <span className="meta-desc">
                    Cash on delivery might be available
                  </span>
                </p>
                <p className="meta-info">
                  <span className="meta-desc">
                    Easy 30 days returns &amp; 30 days exchanges
                  </span>
                </p>
                <p className="meta-info">
                  <span className="meta-desc">
                    Try &amp; Buy might be available
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PDP;
