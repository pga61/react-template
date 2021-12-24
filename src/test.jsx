import React from 'react';
import Style from './style/test.css';

class Test extends React.Component {
  render() {
    return (
      <div className={Style.literature}>
        <div className="prose">
          <h1>Super Important Prose</h1>
          <p> Brilliantly composed text
               <br /> <a href="#">Instantly epic link</a>
          </p>
        </div>
        <div className={Style.poetry}>
          <h1>Immensly Moving Poem</h1>
          <p> A terse metaphore
               <br /> <a href="#">An allegorical link</a>
          </p>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Logos.svg/1200px-Logos.svg.png"
              className="img-responsive"
              style={{ width: 100 + "%" }}
              alt="Image"
            />
          </div>
          <div className="container">
            <div
              className="collapse navbar-collapse nav-container"
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/men">
                    <a className="nav-link js-scroll-trigger navItem">Men</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/women">
                    <a className="nav-link js-scroll-trigger navItem">Women</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/kids">
                    <a className="nav-link js-scroll-trigger navItem">Kids</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/homeDecor">
                    <a className="nav-link js-scroll-trigger navItem">
                      Home & Living
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="input-group add-on searchInLine">
              <input
                className="searchBox"
                placeholder="Search"
                name="srch-term"
                id="srch-term"
                type="text"
              />
              <div classNmae="input-group-btn">
                <button className="btn btn-default searchBox" type="submit">
                  <i className="glyphicon glyphicon-search" />
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-default btn-sm navBtn">
                  <span className="glyphicon glyphicon-user" />
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-default btn-sm navBtn">
                  <span className="glyphicon glyphicon-shopping-cart" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Test

