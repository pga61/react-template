import React from "react";
import Style from "./styleCarousel.css";
import { Carousel } from "react-bootstrap";

class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://d1cr7zfsu1b8qs.cloudfront.net/simages/1200-300_yqqym6T.jpg"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://cdn.shopify.com/s/files/1/1231/6442/collections/04__CW-Web-Banner__1200-x-300-px__July-17_991f2cdf-14ce-47ce-b8af-1bcfae54ac35_2048x2048.jpg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://cdn.shopify.com/s/files/1/1666/9837/files/Bad_6351aeed-b01d-42d9-b5fa-f89d5dd61d9c_2048x2048.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="https://cdn.galialahav.com/homepage/galia-in-the-media-header.gif"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={900}
            height={500}
            alt="900x500"
            src="http://todayretail.com/media/catalog/category/women_dress_unstitched.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;
