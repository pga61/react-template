import React from "react";
import { Link } from "react-router-dom";
import PramotionalBar from "../compound/pramotionalBar/PramotionalBar";
import MegaMenu from "../compound/megaMenu/MegaMenu";
import Style from "./styleHeader.css";

class Header extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="top-header">
          <PramotionalBar />
          <MegaMenu />
        </div>
      </div>
    );
  }
}

export default Header;
