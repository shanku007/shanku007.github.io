import React, { Component } from "react";
import $ from "jquery";
import avatar from "./assets/male.png";
import avatarScroll from "./assets/male1.png";

export class Header extends Component {
  componentDidMount() {
    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();
      $(".active-nav").removeClass("active-nav");
      $(this).addClass("active-nav");
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        500
      );
    });
    $(function () {
      const navbar = $(".header");
      const avatarImage = $("#avatarImage");

      $(window).scroll(function () {
        if ($(window).scrollTop() <= 40) {
          navbar.removeClass("fixed-to-top");
          avatarImage.attr("src", avatar);
        } else {
          navbar.addClass("fixed-to-top");
          avatarImage.attr("src", avatarScroll);
        }
      });
    });
  }
  render() {
    return (
      <header>
        <div className="header">
          <div className="header__logo">
            <a href="#home">
              <img src={avatar} alt="Avatar image" id="avatarImage" />
            </a>
          </div>
          <div className="header__nav">
            <nav>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#experience">EXPERIENCE</a>
              </li>
              <li>
                <a href="#certification">CERTIFICATION</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
