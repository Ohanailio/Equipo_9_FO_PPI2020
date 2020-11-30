import React, { Component } from "react";
import Notice from "../components/Notice.jsx";
import Navbar2 from "../components/Navbar";

export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar2/>
      <Notice/>
      </>
    );
  }
}
