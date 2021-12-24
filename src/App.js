import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import Footer from "./components/footer/Footer";
import PLP from "./components/PLP/PLP";
import PDP from "./components/PDP/PDP";
import Error from "./components/404/Error";
import Style from "./styles/styles.css";

const App = () => (
  <Router>
    <div className="body-bg">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/homePage" component={HomePage} />
      <Route path="/shop/:id/:cat" component={PLP} />
      <Route path="/product/:id" component={PDP} />
      <Footer />
    </div>
  </Router>
);

export default App;
