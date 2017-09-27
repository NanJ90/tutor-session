import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Main = props => (
  <div>
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Main;