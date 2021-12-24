import React from "react";
import "./styleFooter.css";

class Footer extends React.Component {
  onMouseOverHandler(e) {
    e.target.classList.add("shake", "animated");
  }
  onMouseOutHandler(e) {
    e.target.classList.remove("shake", "animated");
  }
  render() {
    return (
      <div id="footer" data-animate="fadeInUp">
        <div className="container">
          <div className="row col-sm-12 footer-container">
            <div className="col-md-3 col-sm-6">
              <h4>Pages</h4>

              <ul>
                <li>
                  <a href="text.html">About us</a>
                </li>
                <li>
                  <a href="text.html">Terms and conditions</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
              </ul>

              <hr />

              <h4>User section</h4>

              <ul>
                <li>
                  <a href="#" data-toggle="modal" data-target="#login-modal">
                    Login
                  </a>
                </li>
                <li>
                  <a href="register.html">Regiter</a>
                </li>
              </ul>

              <hr className="hidden-md hidden-lg hidden-sm" />
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Top categories</h4>

              <h5>Men</h5>

              <ul>
                <li>
                  <a href="category.html">T-shirts</a>
                </li>
                <li>
                  <a href="category.html">Shirts</a>
                </li>
                <li>
                  <a href="category.html">Accessories</a>
                </li>
              </ul>

              <h5>Ladies</h5>
              <ul>
                <li>
                  <a href="category.html">T-shirts</a>
                </li>
                <li>
                  <a href="category.html">Skirts</a>
                </li>
                <li>
                  <a href="category.html">Pants</a>
                </li>
                <li>
                  <a href="category.html">Accessories</a>
                </li>
              </ul>

              <hr className="hidden-md hidden-lg" />
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Where to find us</h4>

              <p>
                <strong>Obaju Ltd.</strong>
                <br />13/25 New Avenue
                <br />New Heaven
                <br />45Y 73J
                <br />England
                <br />
                <strong>Great Britain</strong>
              </p>

              <a href="contact.html">Go to contact page</a>

              <hr className="hidden-md hidden-lg" />
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Get the news</h4>

              <p className="text-muted">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>

              <form>
                <div className="input-group">
                  <input type="text" className="form-control" />

                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Subscribe!
                    </button>
                  </span>
                </div>
              </form>

              <hr />

              <h4>Stay in touch</h4>

              <p className="social">
                <a
                  href="#"
                  className="facebook external"
                  ref="abc"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}>
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="#"
                  className="twitter external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}>
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="#"
                  className="instagram external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}>
                  <i className="fa fa-instagram" />
                </a>
                <a
                  href="#"
                  className="gplus external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}>
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  href="#"
                  className="email external"
                  onMouseOver={this.onMouseOverHandler}
                  onMouseOut={this.onMouseOutHandler}>
                  <i className="fa fa-envelope" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
