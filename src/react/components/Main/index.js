import React, { Component, Fragment } from "react";
import { Home } from "../Home";
import { About } from "../About";
import { Experience } from "../Experience";
import { Certification } from "../Certification";
import { Contact } from "../Contact";

export class Main extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <About />
        <Experience />
        <Certification />
        <Contact/>
      </Fragment>
    );
  }
}
