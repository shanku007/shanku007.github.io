import React, { Component } from "react";
import $ from "jquery";

export class Home extends Component {
  constructor(props) {
    super();
    this.cursorRef = React.createRef();
    this.captionRef = React.createRef();
    this.type = this.type.bind(this);
    this.erase = this.erase.bind(this);
    this.state = {
      caption: "",
      text: "Hey, I am Shankar Jha. I am a Software Developer.",
      captionLength: 0,
    };
  }
  componentDidMount() {
    setInterval(cursorAnimation, 600);
    this.type();

    function cursorAnimation() {
      $("#cursor")
        .animate(
          {
            opacity: 0,
          },
          "fast",
          "swing"
        )
        .animate(
          {
            opacity: 1,
          },
          "fast",
          "swing"
        );
    }
  }
  type() {
    let { caption, text, captionLength } = this.state;
    this.setState({
      caption: text.substr(0, captionLength+ 1),
      captionLength:captionLength+1,
    });
    if (captionLength < caption.length + 1) {
      setTimeout(this.type, 50);
    } else {
      setTimeout(this.erase, 50);
      
    }
  }

  erase() {
    let { text, captionLength } = this.state;
    this.setState({
      caption: text.substr(0, captionLength-1),
      captionLength:captionLength-1,
    });
    if (captionLength >= 0) {
      setTimeout(this.erase, 50);
    } else {
      setTimeout(this.type, 50);
    }
  }

  render() {
    let { caption } = this.state;
    return (
      <section id="home" className="home">
        <p className="home__console">
          <span>shankar@working-from-home:~${caption}</span>
          <span id="caption" ref={this.captionRef}></span>
          <span id="cursor" ref={this.cursorRef}>
            |
          </span>
        </p>
      </section>
    );
  }
}


