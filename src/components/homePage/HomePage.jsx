import React from "react";
import CarouselComponent from "../compound/carousel/CarouselComponent";
import CIG from "../compound/CIG/CIG";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <CarouselComponent />
        <CIG />
      </div>
    );
  }
}

export default HomePage;
